import React, { useState } from 'react'

function Btn({name, thisId, afterClick,index }) {

  return (
    <>
    <div>
      <button onClick={() => afterClick(index)}>
        {name}
        {thisId ? " Y" : " X"}
      </button>
    </div>
    </>
  )
}

export default Btn