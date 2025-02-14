# incus 基于证书进行校验
# generate_certificate 生成一对密钥后，把公钥  incus config trust add-certificate <file> 到 incus 就可以使用密钥访问了

import os
import datetime

from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.backends import default_backend

def generate_tls_certificate():
    """
    return (certificate, private_key)
    """
    # 生成 ECDSA 密钥对（使用 secp384r1 曲线）
    key = ec.generate_private_key(ec.SECP384R1(), default_backend())
    
    # 创建证书签名请求 (CSR)
    csr = x509.CertificateSigningRequestBuilder().subject_name(
        x509.Name([
            x509.NameAttribute(NameOID.COMMON_NAME, u"localhost"),
            x509.NameAttribute(NameOID.ORGANIZATION_NAME, u"IncusConnector"),
            x509.NameAttribute(NameOID.ORGANIZATIONAL_UNIT_NAME, u"IncusUnit"),
            x509.NameAttribute(NameOID.COUNTRY_NAME, u"CN"),
        ])
    ).add_extension(
        x509.SubjectAlternativeName([x509.DNSName(u"localhost")]),
        critical=False
    ).sign(key, hashes.SHA256(), default_backend())
    
    # 自签名证书
    cert = x509.CertificateBuilder().subject_name(
        csr.subject
    ).issuer_name(
        csr.subject
    ).public_key(
        csr.public_key()
    ).serial_number(
        x509.random_serial_number()
    ).not_valid_before(
        datetime.datetime.now(datetime.UTC)
    ).not_valid_after(
        datetime.datetime.now(datetime.UTC) + datetime.timedelta(days=365)
    ).add_extension(
        x509.SubjectAlternativeName([x509.DNSName(u"localhost")]),
        critical=False
    ).sign(key, hashes.SHA256(), default_backend())
    
    # 序列化证书和私钥
    cert_pem = cert.public_bytes(serialization.Encoding.PEM).decode('utf-8')
    key_pem = key.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.TraditionalOpenSSL,
        encryption_algorithm=serialization.NoEncryption()
    ).decode('utf-8')
    
    return cert_pem, key_pem



cert_dir = "config/cert"
cert_file = os.path.join(cert_dir, "cert.crt")
cert_key_file = os.path.join(cert_dir, "cert.key")

def init_cert():
    if not os.path.isdir(cert_dir):
        os.makedirs(cert_dir, exist_ok=True)

    if not os.path.isfile(cert_file):
        cert, key = generate_tls_certificate()
        with open(cert_file, "wt", encoding="utf-8") as f:
            f.write(cert)
        with open(cert_key_file, "wt", encoding="utf-8") as f:
            f.write(key)
            
            
def get_cached_cert_str():
    """
    return cert_str, cert_key_str
    """
    with open(cert_file, "rt", encoding="utf-8") as cf, open(cert_key_file, "rt", encoding="utf-8") as kf:
        return cf.read(),kf.read()
    
    
    
if __name__ == '__main__':
    ## 生成证书并打印
    cert_pem, key_pem = generate_tls_certificate()
    print("证书 (PEM 格式):")
    print(cert_pem)
    print("\n私钥 (PEM 格式):")
    print(key_pem)
