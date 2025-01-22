import React, { useState } from 'react'
import Btn from './components/Btn'

function App() {

  const arr = ["Dani" ,"Saffi" ,"faizi", "anser"]

  const [currentId ,setCurrentId] = useState(null)
  const change = (id) => {
    setCurrentId(id === currentId ? null : id)
  }

  return (
    <div>
        {arr.map((namez ,nums) => 
        <Btn 
        key={nums}
        name={namez} 
        afterClick={change}
        thisId={currentId === nums}
        index={nums}
        />
        )}
    </div>
  )
}

export default App