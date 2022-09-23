import { useState } from 'react'
import './App.css'
import Home from './assets/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Home/>
      </main>
    </>
  )
}

export default App
