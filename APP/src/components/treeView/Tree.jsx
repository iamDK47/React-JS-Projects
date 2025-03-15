import React from 'react'
import Menu from './data'
import MenuItem from './MenuItem'

function Tree({list}) {

  return (
    <div>
      <div className='sideBar'>
        {list.map((obj,index) =>
          <MenuItem item ={obj} key={index}/>
        )}
      </div>
    </div>
  )
}

export default Tree