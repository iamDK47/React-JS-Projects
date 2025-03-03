import React from 'react'
import { memo } from 'react'

const Prod = memo(({products}) =>{
 return (
  <div>
  {products.map((prod,index) =>
   <div key={index}>
     <img src={prod.thumbnail}/>
     
     <p>{prod.title}</p>
   </div>
  )}
 </div>
 )
}) 

export default Prod