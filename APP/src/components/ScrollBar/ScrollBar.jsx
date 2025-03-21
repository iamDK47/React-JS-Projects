import React, { useEffect, useState } from 'react'
import './style.css'

function ScrollBar() {
 const [prod, setProd] = useState([])
 const [bar, setBar] = useState()

 useEffect(() => {
  const call = async () => {
   try {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json()
    setProd(data.products)

   } catch (err) {
    console.log("error", err)
   }
  }
  call()
 }, [])

 const scrolled = () => {
  const startHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const percentComplete = (document.documentElement.scrollTop / startHeight) * 100
  setBar(percentComplete)

 }

 window.addEventListener('scroll', scrolled)
 // useEffect(() => {
 //  return () => {
 //   window.removeEventListener('scroll', () => { })
 //  }
 // }, [])

 console.log(bar)

 return (
  <>
   <div className='Top'>
    <div className='ProgressContainer'>
     <div
      className='scroll-bar'
      style={{ width: `${bar}%` }}
     ></div>
    </div>
   </div>


   <div className='data'>
    {
     prod.map((obj, index) =>
      <p key={index}>
       {obj.title}
      </p>
     )
    }
   </div>
  </>

 )
}

export default ScrollBar