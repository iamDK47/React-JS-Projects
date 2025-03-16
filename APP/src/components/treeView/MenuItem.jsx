import React, { useState } from 'react'
import Tree from './tree'

function MenuItem({item}) {

 const [click, setClick] = useState(false)

  return (
    <ol>
     {item.label}
     { item.children && 
     <button onClick={() => setClick(prev => !prev)}>
     <span> {click ? '-' : '+' } </span> 
     </button>
     }

     { item.children && click ?
      <Tree list={item.children}/>
     : null}
    </ol>
  )
}

export default MenuItem