import React, { useState, useEffect } from 'react'

function useStorage(key) {
 const [value, setValue] = useState(() => {
 
  let currentVal = JSON.parse(
   localStorage.getItem(key))
  
   return currentVal;
 })

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
 
  return [value, setValue]
}

export default useStorage