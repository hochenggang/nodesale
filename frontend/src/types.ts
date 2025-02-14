
interface apiGet1dot0MetadataEnvironment {
    addresses: string[];
    architectures: string[];
    certificate: string;
    certificate_fingerprint: string;
    driver: string;
    driver_version: string;
    firewall: string;
    kernel: string;
    kernel_architecture: string;
    kernel_features: object;
    kernel_version: string;
    lxc_features: object;
    os_name: string;
    os_version: string;
    project: string;
    server: string;
    server_clustered: boolean;
    server_event_mode: string;
    server_name: string;
    server_pid: number;
    server_version: string;
    storage: string;
    storage_supported_drivers: object[];
    storage_version: string;
}



// 定义元数据类型
interface apiGet1dot0Metadata {
    api_extensions: string[];
    api_status: string;
    api_version: string;
    auth: string;
    auth_methods: string[];
    auth_user_method: string;
    auth_user_name: string;
    config: object;
    environment: apiGet1dot0MetadataEnvironment;
    public: boolean;
}

// 定义整个响应数据类型
interface apiGet1dot0 {
    metadata: apiGet1dot0Metadata;
    status: string;
    status_code: number;
    type: string;
}


export type {
    apiGet1dot0,
}