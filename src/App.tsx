// src/App.tsx
import { Outlet, NavLink } from 'react-router-dom'
import ThemeToggleButton from './components/ThemeToggleButton' // 引入按钮
import './App.css' // 我们将为导航栏添加一些样式

function App() {
  // 动态设置页面标题
  document.title = import.meta.env.VITE_APP_TITLE || 'React App'

  return (
    <div className="app-container">
      <ThemeToggleButton /> {/* 添加按钮 */}
      <header className="app-header">
        <h1>React 功能案例模板</h1>
        <nav className="github-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            首页
          </NavLink>
          <NavLink
            to="/hooks"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Hooks 示例
          </NavLink>
          <NavLink
            to="/data-fetching"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            数据请求
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            表单处理
          </NavLink>
          <NavLink
            to="/views"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            视图列表
          </NavLink>
          <NavLink
            to="/table-view"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Table View
          </NavLink>
          <NavLink
            to="/configurable-form"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Config Form
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
