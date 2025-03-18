import React, { useEffect } from 'react'

function ScrollBar() {
 const [obj, setObj ]

 useEffect(() => {

  async function call() {
  try{
    const response = await fetch('https://dummyjson.com/products?limit=100')
    if(!response.ok){
     throw('ERROR')
    } else {
     const data = response.json()
    }
   }
  }
  catch (err) {
   console.log("error" , err)
  }

 },[])

  return (
    <div>Hello</div>
  )
}

export default ScrollBar