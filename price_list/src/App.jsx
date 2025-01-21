import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/btn'

function App() {
  const [x, setX] = useState(0)

  const arr = ["faizi" , "saffi" ,"anser" , "rahib"]

  return (
    <>
      <div>
        { arr.map((name , index) =>
          <Btn name = {name} click = {} /> )}
      </div>
    </>
  )
}

export default App