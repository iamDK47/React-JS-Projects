import React from 'react'
import { useState } from 'react'

function FAQ({ question , answer }) {
   const [drop , setDrop] = useState(false)

  return (
      <div>
          {question}
        <div>
          <button onClick={() => setDrop(prev => !prev)}> 
            {drop ? "-" : "+"} 
          </button>
        </div>
        {drop && <p>{answer}</p>}          
      </div>
  )
}

export default FAQ