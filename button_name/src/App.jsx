import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/btn'

function App() {
  const [x, setX] = useState(0)

  const arr = ["faizi" ,"saffi" ,"anser" ,"rahib"]
  const array = ["X " ," Y"]
  
  return (
    <>
      <div>
        { arr.map((name, id) =>
          <Btn  name={name} id={id} /> )
        }
      </div>
    </>
  )
}

export default App