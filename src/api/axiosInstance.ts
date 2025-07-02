// src/api/axiosInstance.ts
import axios from 'axios'

// 使用一个公共的假数据 API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10秒超时
  headers: {
    'Content-Type': 'application/json',
  },
})

// 可以在这里添加请求和响应拦截器
// axiosInstance.interceptors.request.use(...)
// axiosInstance.interceptors.response.use(...)

export default axiosInstance
