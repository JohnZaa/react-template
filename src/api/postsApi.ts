// src/api/postsApi.ts
import axiosInstance from './axiosInstance'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get('/posts?_limit=10') // 只获取前10条
  return response.data
}
