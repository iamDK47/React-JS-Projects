import React from 'react'

function ListItem({eleID, Delete ,activeEdit, editId, edit}) {

  
  
  return (
    <div>
     <button onClick={() => Delete(eleID)}>
      X
     </button>
     <button
     onClick={() => activeEdit(editId)}
     >
      {edit ? "📁" : "✏️"}
     </button>
    </div>
  )
}

export default ListItem