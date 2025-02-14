
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

export {
    getCachedToken,
    setToken,
}
