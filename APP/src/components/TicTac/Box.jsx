import React, { useState } from 'react'
import './Style.css'

function Box({clicker, value, id}) {

  return (
    <div className='box'>
     <button className='btn' onClick={() => clicker(id)}>
      {value}
     </button>
    </div>
  )
}

export default Box