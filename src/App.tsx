// src/App.tsx
import { Outlet, NavLink } from 'react-router-dom'
import './App.css' // 我们将为导航栏添加一些样式

function App() {
  // 动态设置页面标题
  document.title = import.meta.env.VITE_APP_TITLE || 'React App'

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React 功能案例模板</h1>
        <nav>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/hooks">Hooks 示例</NavLink>
          <NavLink to="/data-fetching">数据请求</NavLink>
          <NavLink to="/form">表单处理</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
