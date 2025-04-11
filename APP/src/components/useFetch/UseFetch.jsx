import React, { useEffect, useState } from 'react'

function UseFetch() {
 
 const [data, setData] = useState()
 
 const func = () => {
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(res => setData(res))
  .catch(err => console.log('error caught' , err))
 }
 
 useEffect(() => {
  func()
 },[])

  return [ data ]
}

export default UseFetch