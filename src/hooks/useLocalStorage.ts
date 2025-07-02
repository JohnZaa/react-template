// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // 从 localStorage 获取初始值，或使用传入的初始值
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // 每当值改变时，更新 localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
