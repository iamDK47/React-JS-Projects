import React from 'react'

function ListItem({eleID, Delete}) {

  return (
    <div>
     <button onClick={() => Delete(eleID)}>
      X
     </button>
    </div>
  )
}

export default ListItem