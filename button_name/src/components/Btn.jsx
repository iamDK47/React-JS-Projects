import React from 'react'

function Btn({name, id, isActive, click}) {

  return (
    <div>
      <button onClick={() => click(id)}>
        {name}
        {isActive ? " Y" : " X"}
      </button>
    </div>
  )
}

export default Btn