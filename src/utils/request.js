import axios from 'axios'
import config from './../config'
import {ElMessage} from 'element-plus'
import router from "../router";

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常'

const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000,
})

service.interceptors.request.use((req) => {
    const {headers} = req
    if (!headers.Authorization) {
        headers.Authorization = 'xx'
    }
    return req
})

service.interceptors.response.use((res) => {
    const {code, data, msg = ''} = res.data
    if (code === 200) {
        return data
    } else if (code === 500001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }
    return service(options)
}

// 另一种封装方法,通过request.get(url,data)调用
['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request



