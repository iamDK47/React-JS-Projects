import React from 'react'
import Menu from './data'
import MenuItem from './MenuItem'

function Tree({list}) {

  return (
    <div>
      <div className='menu'>
        {list.map((obj,index) =>
          <MenuItem item ={obj} key={index}/>
        )}
      </div>
    </div>
  )
}

export default Tree