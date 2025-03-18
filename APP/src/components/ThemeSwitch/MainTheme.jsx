import React, { useEffect } from 'react'
import { useState } from 'react'
import './theme.css'
import useStorage from './useStorage'

function MainTheme() {

 const[theme, setTheme] = useStorage()

 const toggle = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark')
 }

 useEffect(() => {
  document.body.setAttribute('changer', theme);
}, [theme]);

  return (

    <div className='btn'>
     <div className='container'>
      <p>Theme Changer</p>
     <button onClick={toggle}>
      {theme} Theme
     </button>
     </div>
    </div>
  
   )
}

export default MainTheme