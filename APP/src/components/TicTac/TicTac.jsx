import React, { useEffect,useState } from 'react'
import Box from './Box'
import './Style.css'

function TicTac() {

 const [clicked, setClicked] = useState(false)
 const [val, setValue] = useState('')

 const clickFunc = () => {
  setClicked(prev => !prev)
  setValue(clicked ? 'X' : 'O')
 }

 return (
  <div>
   <div className='Clm1'>
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />

   </div>
   <div className='Clm2'>
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />
   </div>
   
   <div className='Clm3'>
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />
    <Box clicker={clickFunc} value={val} />
   </div>
  </div>
 )
}

export default TicTac