import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/btn'

function App() {
  const [count, setCount] = useState(0)

  let change = () => {
    setCount()
  }

  const arr = ["faizi" , "saffi" ,"anser" , "rahib"]

  return (
    <>
      <div>
        { arr.map((name , index) =>
          // <button  key={index}>
          //   {name}
          //   </button>
            <Btn name = {name} /> 
          )
        }
      </div>
    </>
  )
}

export default App