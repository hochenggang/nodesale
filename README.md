# 开始

### 启动后端

拉取代码，安装 python3 虚拟环境，安装依赖，which python 找到路径，再 python server.py 运行
```shell
git clone https://github.com/hochenggang/nodesale
cd nodesale/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

```

```
/var/py_apps/nodesale/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8432 --reload
```