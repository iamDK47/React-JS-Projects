import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListItem from './components/listItem'

function App() {
  const [item, setItem] = useState('')
  const [array, setArray] = useState([])
  const [activeEdit, setActiveEdit] = useState(false)
  const [edit, setEdit] = useState(false)

  const addItem = () => {
    if(item.length > 0){
      setArray( [{id : Date.now() ,item}, ...array])
      // console.log(array[item.id])
      setItem('')
    }
  }

    const del = (id) => {
      setArray(array.filter((elem,index) => id !== index))
    }

    const change = (editId) => {
      setEdit(prev => !prev)
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
          <div key={list.id}>
            {list.item}
            <ListItem 
            Delete={del} 
            eleID={index}
            editId={index}
            activeEdit={change}
            edit={edit}
            />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App