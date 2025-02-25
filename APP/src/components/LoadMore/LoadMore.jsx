import React, { useEffect, useState } from 'react'

function LoadMore() {

 const [count, setCount] = useState(0)
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState()

 
 useEffect(() => 
  {
   async function getData() {
    try {
     const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20}`)
     if(!response.ok){
      throw('error fetching data')
     } else {
      const result = await response.json()
      setProducts((prev) => [...prev, ...result.products]) 
      setLoading(false)
     }
    }
    catch (err) {
     console.log('error', err)
    }
   }
   getData()
 }
  ,[count])

 if(loading){
  return <div>Loading Please Wait</div>
 }



  return (
   <>
    <div className='main'>
     <div className='products'>
      {
       products.map((prod,index) => 
       
        <li key={index}>
         {prod}
        </li>
       )
      }
     </div>

    </div>
   </>

  )
}

export default LoadMore