// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // 引入
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // 引入 Devtools
import router from './router'
import './index.css'

// 创建一个 client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 用 QueryClientProvider 包裹 */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* Devtools 只在开发模式下显示 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
