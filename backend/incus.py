import requests


from cert import cert_file, cert_key_file
from log import logging


logger = logging.getLogger(__name__)


class IncusApis:
    full_server_environment_and_configuration = "/1.0"


class Incus:
    def __init__(self, host: str, port: int = 8443):
        self.host = host
        self.port = port

        self.apis = IncusApis()

    def get_env_conf(self) -> requests.Response:
        return self._http_get_with_cert(
            self.apis.full_server_environment_and_configuration
        )

    def _http_get_with_cert(self, path: str) -> requests.Response:
        return requests.get(
            f"https://{self.host}:{self.port}{path}", cert=(cert_file, cert_key_file),verify=False
        )

    def _http_post_with_cert(self, path: str, json: dict) -> requests.Response:
        return requests.post(
            f"https://{self.host}:{self.port}{path}", cert=(cert_file, cert_key_file), json=json,verify=False
        )
