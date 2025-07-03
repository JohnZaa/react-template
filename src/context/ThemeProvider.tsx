import React, { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import type { Theme } from '../types/theme'
// 可以将 Theme 类型提取到单独的文件，比如 src/context/types.ts
// 在 ThemeProvider.tsx 和 ThemeContext.tsx 中都从该文件导入 Theme 类型

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
