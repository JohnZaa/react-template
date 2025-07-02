// src/pages/AboutPage.tsx
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is a template project built with React, Vite, and TypeScript.</p>
      <nav>
        <Link to="/">Go back to Home</Link>
      </nav>
    </div>
  )
}

export default AboutPage
