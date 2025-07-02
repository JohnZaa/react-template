// src/pages/HomePage.tsx
import { Link } from 'react-router-dom'
import useCounterStore from '../store/counterStore' // 引入 store

const HomePage = () => {
  // 从 store 中获取 state 和 actions
  const { count, increment, decrement } = useCounterStore()

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our awesome React Template! Deployed on Vercel!</p>

      <div style={{ marginTop: '20px' }}>
        <h3>Global Counter (Zustand)</h3>
        <p>Count: {count}</p>
        <button onClick={increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <nav style={{ marginTop: '20px' }}>
        <Link to="/about">Go to About Page</Link>
      </nav>
    </div>
  )
}

export default HomePage
