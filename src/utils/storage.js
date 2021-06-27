export default {
    setItem(key, val) {
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem('manage', JSON.stringify(storage))
    },
    getItem(key) {
        return this.getStorage()[key]
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem('manage', JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.clear()
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem('manage') || "{}")
    }
}
