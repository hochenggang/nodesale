# 基于 fastapi 提供控制路由
import os
from contextlib import asynccontextmanager


from fastapi import (
    FastAPI,
    Header,
    Query,
    Request,
    Response,
)
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from log import logging
from database import init_db, create_database_pool, DB_POOL
from cert import init_cert, get_cached_cert_str
from incus import Incus
import data_model

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 初始化证书
    init_cert()
    # 初始化数据库
    # await init_db()
    # await create_database_pool()

    # 检查证书

    yield  # 应用运行期间保持连接
    # 关闭数据库连接
    if DB_POOL:
        await DB_POOL.close()


# 初始化 FastAPI
app = FastAPI(lifespan=lifespan)

# 限制请求大小
app.max_request_size = 10 * 1024  # 设置请求体最大为 10KB 防止被大文件攻击

# 获取前端 dist 目录的绝对路径
frontend_dist_path = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../frontend/dist")
)

# 挂载静态文件目录，这样可以处理前端静态资源的请求
app.mount(
    "/assets",
    StaticFiles(directory=os.path.join(frontend_dist_path, "assets")),
    name="assets",
)


def generate_error_response(code: str, message: str) -> Response:
    """
    生成通用的错误响应。
    """
    return JSONResponse({"error": message}, status_code=code)


@app.get("/")
async def read_index():
    index_path = os.path.join(frontend_dist_path, "index.html")
    return FileResponse(index_path)


@app.post("/api/admin/node")
async def post_admin_node(node: data_model.apiPostNode) -> Response:
    """
    创建一个节点。
    """
    incus = Incus(node.host, node.port)
    resp = incus.get_env_conf()
    if resp.status_code == 200:
        return JSONResponse(resp.json())
    else:
        return Response(status_code=resp.status_code)


@app.get("/api/admin/incus/cert.crt")
async def get_admin_incus_cert() -> Response:
    """
    返回一个TLS证书的公钥，用于 Incus 授信。规格为：ECDSA 密钥， secp384r1 曲线， SHA-256 签名。
    """
    # 查询数据库是否有证书，如果没有，生成一对，如果有请求并返回
    cert_str, _ = get_cached_cert_str()
    return Response(content=cert_str, media_type="text/plain")


@app.get("/api/admin/incus/install.sh")
async def get_admin_incus_install_script() -> Response:
    """
    返回一个安装 Incus 的脚本。
    """
    # 读取安装脚本模板并把主机域名渲染进去
    with open("config/script/install-incus.sh", "rt", encoding="utf-8") as text_file:
        return Response(content=text_file.read(), media_type="text/plain")


@app.get("/api/admin/incus/auth.sh")
async def get_admin_incus_auth_script(host: str = Header(...)) -> Response:
    """
    返回一个安装 Incus 的认证脚本。
    """
    # 读取安装脚本模板并把主机域名渲染进去
    with open("config/script/auth-incus.sh", "rt", encoding="utf-8") as text_file:
        return Response(
            content=text_file.read().format(host=f"https://{host}"),
            media_type="text/plain",
        )

