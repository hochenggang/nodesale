import type { apiGet1dot0 } from '@/types'
const getCachedToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return token
    }
    return null
}

const setToken = (token: string) => {
    localStorage.setItem('token', token)
}


const setNodesCache = (nodes: Array<apiGet1dot0>): void => {
    localStorage.setItem('nodes', JSON.stringify(nodes))
}

const getNodesCache = (): Array<apiGet1dot0> => {
    let cache = localStorage.getItem('nodes')
    if (cache) {
        return JSON.parse(cache)
    } else {
        return []
    }
}

const addNodeToCache = (config: apiGet1dot0) => {
    const cache = getNodesCache()
    cache.push(config)
    setNodesCache(cache)
}



export {
    getCachedToken,
    setToken,
    setNodesCache,
    getNodesCache,
    addNodeToCache
}
