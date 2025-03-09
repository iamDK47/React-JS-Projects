import React, { useEffect, useState , useMemo } from 'react'
import Prod from './Prod'


function LoadMore() {
  
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)

  const memo = useMemo(() => 
    products.thumbnail , [products])

 async function getData() {
  try {
   setLoading(true)
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
   setLoading(false)
 }
}

 console.log(products)
 
 useEffect(() => {
  getData()
 } ,[count])

useEffect( () => {
  if(products.length === 100) {
    setDisable(true)
  }
},[products])

 if(loading){
  return <div>Loading Please Wait</div>
 }

  return (
   <>
    <div className='main'>
     <div className='products'>
      {memo.map((product) => 
      <Prod key={product.id} thumbnail={product.thumbnail} title={product.title}/>
      )}
     </div>
       <button
       disabled={disable}
       onClick={() => setCount(count + 1)}>
        Load More
       </button>
       {disable ? <p>No more Products to Load</p>: null}
    </div>
   </>
  )
}


export default LoadMore



// import React, { useEffect, useState, memo } from 'react'

// const ProductItem = memo(({ product }) => {
//   return (
//     <div>
//       <img src={product.thumbnail} alt={product.title} />
//       <p>{product.title}</p>
//     </div>
//   )
// })

// function LoadMore() {
//   const [count, setCount] = useState(0)
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [disable, setDisable] = useState(false)

//   async function getData() {
//     try {
//       setLoading(true)
//       const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
//       if (!response.ok) {
//         throw('error fetching data')
//       } else {
//         const result = await response.json()
//         setProducts((prev) => [...prev, ...result.products]) 
//         setLoading(false)
//       }
//     }
//     catch (err) {
//       console.log('error', err)
//       setLoading(false)
//     }
//   }
  
//   useEffect(() => {
//     getData()
//   }, [count])

//   useEffect(() => {
//     if (products.length === 100) {
//       setDisable(true)
//     }
//   }, [products])

//   if (loading && products.length === 0) {
//     return <div>Loading Please Wait</div>
//   }

//   return (
//     <>
//       <div className='main'>
//         <div className='products'>
//           {products.map((product) => (
//             <ProductItem key={product.id} product={product} />
//           ))}
//         </div>
        
//         {loading ? (
//           <div>Loading more products...</div>
//         ) : (
//           <button
//             disabled={disable}
//             onClick={() => setCount(count + 1)}>
//             Load More
//           </button>
//         )}
        
//         {disable && <p>No more Products to Load</p>}
//       </div>
//     </>
//   )
// }

// export default LoadMore