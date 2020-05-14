import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000 // 请求超时时间
  // withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['lp-token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.status === 0) {
      return response.data
    } else if (response.data.status === 401) {
      Message({
        message: '请求失败：' + response.data.msg,
        type: 'error',
        duration: 2 * 1000
      })
    } else if (response.data.status === 403) {
      Message({
        message: '请求失败：' + response.data.msg,
        type: 'error',
        duration: 2 * 1000
      })
    } else {
      Message({
        message: '请求失败：' + response.data.msg,
        type: 'error',
        duration: 2 * 1000
      })
    }
    return response
    // TODO 服务器统一访问200， 根据内容抛出异常
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
