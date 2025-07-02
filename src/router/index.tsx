// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react' // 引入 React 和 Suspense
import App from '../App'
import PageLoader from '../pages/PageLoader' // 引入页面加载组件

// 使用 React.lazy 动态导入页面组件
const HomePage = React.lazy(() => import('../pages/HomePage'))
const HooksPage = React.lazy(() => import('../pages/HooksPage'))
const DataFetchingPage = React.lazy(() => import('../pages/DataFetchingPage'))
const FormPage = React.lazy(() => import('../pages/FormPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 使用 Suspense 包裹每个懒加载的组件
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'hooks',
        element: (
          <Suspense fallback={<PageLoader />}>
            <HooksPage />
          </Suspense>
        ),
      },
      {
        path: 'data-fetching',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DataFetchingPage />
          </Suspense>
        ),
      },
      {
        path: 'form',
        element: (
          <Suspense fallback={<PageLoader />}>
            <FormPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
