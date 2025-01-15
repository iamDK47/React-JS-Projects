import React from 'react'
import { useState } from 'react'

function FAQ({ question , answer }) {
   const [drop , setDrop] = useState("")

   const change = function(){
         setDrop( (prevState) => !prevState )
      
   }

  return (
      <div>
            <div>
                  <button
                  onClick={change}
                  >
                        {drop ? "-" : "+"}
                  </button>
                  {question}
            </div>
            {drop && <p>{answer}</p>}
                  
      </div>

  )
}

export default FAQ