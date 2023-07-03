//本地存储存储
export const setItem = (key, value) => {
    if (typeof value === "object") {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}
//本地存储调用
export const getItem = key => {
    const data = window.localStorage.getItem(key)
    try {
        return JSON.parse(data)
    } catch (err) {
        return data
    }
}
//删除本地存储
export const removeItem = key => {
    window.localStorage.removeItem(key)
}