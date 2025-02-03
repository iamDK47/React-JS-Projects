import { useState } from 'react'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(null)

  const change = (id) => {
    setActiveId(id === activeId ? null : id)
  }



  const array = ['cat', 'dog', 'deer', 'snail']

  return (
    <>
    <div>
     {array.map((name,index) => 
      <label key={index}>
        <input
        type='radio'
        checked={activeId == index}
        onChange={() => change(index)}
        />
        {name}
      </label>
     )}
    </div>
    </>
  )
}

export default App

