import React from 'react'
import { memo } from 'react'

const Prod = memo(({product}) => {
 return (
   <div>
     <img src={product.thumbnail}  alt={product.title}/>
     <p>{product.title}</p>
   </div>
 )
}) 

export default Prod