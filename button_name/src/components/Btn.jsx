import React, { useState } from 'react'

function Btn({name , id , click}) {

  const [clicked, setClicked] = useState(true)

  return (
    <div>
      <button onClick={() => {setClicked(prev => !prev)}}>
        {name} 
        {clicked ? " X" : " Y"} 
      </button>
    </div>
  )
}

export default Btn