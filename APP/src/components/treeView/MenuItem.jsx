import React from 'react'
import Tree from './tree'

function MenuItem({item}) {
  return (
    <ul>
     <p>{item.label}</p>
     {item && item.children ?
      <Tree list={item.children}/>
     : null
     }
    </ul>
  )
}

export default MenuItem