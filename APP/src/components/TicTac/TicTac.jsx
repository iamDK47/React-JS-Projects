import React, { useEffect, useState } from 'react'
import Box from './Box'
import './Style.css'

function TicTac() {
 const [player, setPlayer] = useState(false)
 const [boxx, setBoxx] = useState(Array(9).fill(null))

 const clickFunc = (id) => {
  if(boxx[id] === null){
   const newBoxx = [...boxx]
   newBoxx[id] = player ? 'X' : 'O'
   setBoxx(newBoxx)
   setPlayer(prev => !prev)
  }
 }

 return (
  <div className='container'>
  <div className='Main'>
   <div className='Clm1'>
    {[0, 1, 2].map((index) =>
      <Box 
      clicker={ clickFunc} 
      value={boxx[index]} 
      id={index} 
      key={index} 
      />
     )}
   </div>
   <div className='Clm1'>
    {[3, 4, 5].map((index) =>
      <Box 
      clicker={ clickFunc} 
      value={boxx[index]} 
      id={index} 
      key={index} 
      />
     )}
   </div>
   <div className='Clm1'>
    {[6, 7, 8].map((index) =>
      <Box 
      clicker={ clickFunc} 
      value={boxx[index]} 
      id={index} 
      key={index} 
      />
     )}
   </div>
  </div>
   <p className='P'>Player {player ? "2's" : "1's"} turn</p>
     </div>
 )
}

export default TicTac