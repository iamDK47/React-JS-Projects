import React, { useState } from 'react'
import Tree from './tree'

function MenuItem({item}) {

 const [click, setClick] = useState(false)
 

  return (
    <ol>
     {item.label}
     <button onClick={() => setClick(prev => !prev)}>
     {item && item.children ? <span>+</span> : null }
     </button>

     { click && item && item.children ?
      <Tree list={item.children}/>
     : null}
    </ol>
  )
}

export default MenuItem