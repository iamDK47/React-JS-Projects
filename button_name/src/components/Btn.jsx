// import React from 'react'

// function Btn({name, id, isActive, click}) {

//   return (
//     <div>
//       <button onClick={() => click(id)}>
//         {name}
//         {isActive ? " Y" : " X"}
//       </button>
//     </div>
//   )
// }

// export default Btn



import React, { useState } from 'react'

function Btn({name}) {

  const [active, setActive] = useState(false)

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        {name}
        {active ? ' Y' : 'X'}
      </button>
    </div>
  )
}

export default Btn