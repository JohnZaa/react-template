// src/store/counterStore.ts
import { create } from 'zustand'

// 定义 state 和 actions 的类型
interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

// 创建 store
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
