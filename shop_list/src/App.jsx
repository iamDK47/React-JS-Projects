import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [item, setItem] = useState('')
  const [array, setArray] = useState([])
  // const [active, setActive] = useState(null)

  const addItem = () => {
    setArray([...array, item])
    setItem('')
    if(item===''){
      console.log('type something')
    }
    }

    const del = (id) => {
      setArray(array.filter((elem,index) => id !== index))
    }

  return (
    <>
      <div>
        <input
        value={item}
        onChange={e => setItem(e.target.value)}
        placeholder='write something'
        type='text'
        ></input>
        <button
        onClick={addItem}
        >
          Add
        </button>
        <div>
          {array.map((list,index) => 
          <div key={index}>
            {list}
            <button 
            onClick={() => del(index) }
            >
              X
            </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
