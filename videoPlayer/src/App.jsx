import { useState } from 'react'
import './App.css'

function App() {
  
  const array = [
    {
      name : 'cat',
      url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4'
    },
    {
      name : 'snail',
      url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
    },
    {
      name : 'deer',
      url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
    },
    {
      name : 'spider',
      url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
    }
  ]
  
  const [activeName, setActiveName] = useState(null)

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
        <video 
        loop controls autostart="true" autoPlay muted
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