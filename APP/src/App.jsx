import { useState } from 'react'
import StarRating from './components/StarRating'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StarRating star={10}/>
    </>
  )
}

export default App
