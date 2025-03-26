import React, { useState } from 'react'
import './Style.css'

function Box({clicker, value}) {

  return (
    <div className='box'>
     <button className='btn' onClick={clicker}>
      {value}
     </button>
    </div>
  )
}

export default Box