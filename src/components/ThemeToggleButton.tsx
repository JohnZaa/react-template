// src/components/ThemeToggleButton.tsx
import { useTheme } from '../hooks/useTheme'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{ position: 'fixed', top: '20px', right: '20px', padding: '10px' }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggleButton
