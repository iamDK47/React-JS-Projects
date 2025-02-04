import { useState } from 'react'
import './App.css'

function App() {
  
  const array = [
    {
      name : 'cat',
      url: 'https://www.youtube.com/embed/qolQY2JaKwI'
    },
    {
      name : 'snail',
      url: 'https://www.youtube.com/embed/hHeM499YVNc'
    },
    {
      name : 'deer',
      url: 'https://www.youtube.com/embed/xDCOoeKF7Ow'
    },
    {
      name : 'dog',
      url: 'https://www.youtube.com/embed/9biWC3pKzE0'
    }
  ]
  
  const [activeName, setActiveName] = useState(null)
  const [vid, setVid] = useState(null)

  const change = (name) => {
    setActiveName(name)
  }

  return (
    <>
    <div>
     {array.map((obj,index) => {
      
      return <label key={index}>
        <input
        type='radio'
        checked={obj.name == activeName}
        onChange={() => change(obj.name)}
        />
        {obj.name}
      </label>
     })}
     <div>
     { 
      activeName && (
        <iframe 
        src={array.find((obj) => (obj.name === activeName)).url}
        /> 
      )
     }
     </div>
    </div>
    </>
  )
}

export default App