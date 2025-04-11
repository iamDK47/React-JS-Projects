import React, { useState, createContext, useEffect } from 'react'
import apiResponse from './data.js'
import ContextIndex from './ContextIndex.jsx'
import { featureContext } from './ContextCreate.jsx'

// export const featureContext = createContext(null)

function Context({ children }) {
 const [response, setResponse] = useState()

 async function api() {
  const data = await apiResponse()
  setResponse(data)
 }

 useEffect(() => {
  api()
 }, [])

 return (
  // <featureContext.Provider value={{response}}>
  // {children}
  // </featureContext.Provider>
  <featureContext.Provider value={{ response }}>
   <ContextIndex />
  </featureContext.Provider>
 )
}

export default Context