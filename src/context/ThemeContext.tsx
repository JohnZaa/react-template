import { createContext } from 'react'

// 定义主题类型
type Theme = 'light' | 'dark'

// 定义 Context 提供的值的类型
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// 1. 创建 Context，可以提供一个默认值
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
