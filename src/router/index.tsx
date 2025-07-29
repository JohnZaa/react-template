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
const AboutPage = React.lazy(() => import('../pages/AboutPage'))
const ViewsListPage = React.lazy(() => import('../pages/ViewsListPage'))
const TableViewPage = React.lazy(() => import('../pages/TableViewPage'))
const ConfigurableFormPage = React.lazy(
  () => import('../pages/ConfigurableFormPage')
)
const DraggableGridFormPage = React.lazy(
  () => import('../pages/DraggableGridForm')
)
const ResizableFormPage = React.lazy(() => import('../pages/ResizableForm'))
// 创建路由配置
// 使用 createBrowserRouter 创建路由配置
// 每个页面组件都使用 Suspense 包裹，以便在加载时显示 PageLoader 组件
// 这样可以在页面加载时提供更好的用户体验，避免闪烁或空白屏幕
// 注意：确保在使用 React.lazy 时，组件的导入路径正确，并且组件文件存在于指定路径下
// 这里的路径是相对于 src 目录的路径
// 如果你的项目结构不同，请根据实际情况调整导入路径
// 例如，如果你的组件在 src/components 目录下，你需要调整导入路径为 '../components/YourComponentName'
// 另外，确保你的项目已经安装了 react-router-dom 和相关依赖
// 你可以通过 npm install react-router-dom 来安装最新版本
// 如果你使用的是 TypeScript，请确保你的 tsconfig.json 文件中包含了对 JSX 的支持
// 例如，确保 tsconfig.json 中的 compilerOptions 包含 "jsx":
// {
//   "compilerOptions": {
//     "jsx": "react-jsx",
//     // 其他选项...
//   }
// }
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
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'views',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ViewsListPage />
          </Suspense>
        ),
      },
      {
        path: 'table-view',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TableViewPage />
          </Suspense>
        ),
      },
      {
        path: 'configurable-form',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ConfigurableFormPage />
          </Suspense>
        ),
      },
      {
        path: 'draggable-grid-form',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DraggableGridFormPage />
          </Suspense>
        ),
      },
      {
        path: 'resizable-form',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ResizableFormPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
