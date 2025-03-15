import React from 'react'
import Menu from './data'
import Tree from './tree'

function Main() {
  return (
    <div>
     <Tree list={Menu}/>
    </div>
  )
}

export default Main