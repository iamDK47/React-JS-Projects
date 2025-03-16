import React from 'react'
import { useState } from 'react'
import QRCode from "react-qr-code";

function QR() {

  const [input, setInput] = useState('')
  const [code, setCode] = useState('')



 return (
  <div>
   <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type' />
   <button onClick={() => setCode(input)}>Enter</button>
   <QRCode id='Qr' value={code} size={300} />
  </div>
 )
}

export default QR