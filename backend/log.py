import logging
from logging.handlers import RotatingFileHandler


# 配置日志：轮转日志上限为 20MB
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(module)s - %(funcName)s - %(message)s",
    handlers=[
        RotatingFileHandler(
            filename="web.log",
            maxBytes=20 * 1024 * 1024,
            encoding="utf-8",
        )
    ],
)


