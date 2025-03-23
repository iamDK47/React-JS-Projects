import React, { useState } from 'react'
import Pop from './Pop'

function MainPop() {
 const [box, setBox] = useState(false)

 const show = () => {
  setBox((prev) => !prev)
 }

  return (
    <div>
     {!box &&
      <button
      onClick={show}
      >
      popUp
     </button>
     }
     {box &&
      <Pop />
     }
      
    </div>
  )
}

export default MainPop

