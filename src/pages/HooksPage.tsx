// src/pages/HooksPage.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import useLocalStorage from '../hooks/useLocalStorage' // 引入

// 1. useState: 基础状态
const UseStateExample = () => {
  const [count, setCount] = useState(0)
  return (
    <section>
      <h3>1. useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  )
}

// 2. useEffect: 处理副作用
const UseEffectExample = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    // 清理函数
    return () => clearInterval(timerId)
  }, []) // 空依赖数组，只在挂载时运行一次

  return (
    <section>
      <h3>2. useEffect</h3>
      <p>Current Time: {time}</p>
    </section>
  )
}

// 3. useRef: 访问 DOM
const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <section>
      <h3>3. useRef</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>
    </section>
  )
}

// 4. useMemo: 缓存计算结果
const UseMemoExample = () => {
  const [num, setNum] = useState(5)
  const [trigger, setTrigger] = useState(false)

  const expensiveCalculation = (n: number) => {
    console.log('Running expensive calculation...')
    let result = 0
    for (let i = 0; i < n * 100000000; i++) {
      result += 1
    }
    return result
  }

  const calculatedValue = useMemo(() => expensiveCalculation(num), [num])

  return (
    <section>
      <h3>4. useMemo</h3>
      <p>
        Calculated Value (for num={num}): {calculatedValue}
      </p>
      <button onClick={() => setNum(num + 1)}>Change Num</button>
      <button onClick={() => setTrigger(!trigger)}>Re-render Component</button>
      <p>Re-render Trigger is: {String(trigger)} (Check console)</p>
    </section>
  )
}

// 5. useCallback: 缓存函数
const ChildComponent = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent re-rendered')
  return <button onClick={onClick}>I am a child button</button>
})

const UseCallbackExample = () => {
  const [count, setCount] = useState(0)

  const memoizedCallback = useCallback(() => {
    alert('Button clicked! The function did not change.')
  }, []) // 空依赖，函数永远不会重新创建

  return (
    <section>
      <h3>5. useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Parent State
      </button>
      <ChildComponent onClick={memoizedCallback} />
      <p>
        Clicking "Increment" won't re-render the child button (check console).
      </p>
    </section>
  )
}

const HooksPage = () => {
  return (
    <div>
      <h2>React Hooks Showcase</h2>
      <UseStateExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseRefExample />
      <hr />
      <UseMemoExample />
      <hr />
      <UseCallbackExample />
      <hr />
      <CustomHookExample />
    </div>
  )
}

// 6. Custom Hook
const CustomHookExample = () => {
  const [name, setName] = useLocalStorage('username', 'Guest')

  return (
    <section>
      <h3>6. Custom Hook: useLocalStorage</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}! (This value is saved in localStorage)</p>
    </section>
  )
}

export default HooksPage
