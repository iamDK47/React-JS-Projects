import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(40)
  const [height, setHeight] = useState(130)

  const BMI = Number(height) + Number(weight)

  return (
    <>
      <div className='main'>
        <p>
          BMI CALCULATOR
        </p>
        <div>
          <p> Weight: {weight} kg</p>
          <input
          type = 'range'
          step={1}
          min={50}
          max={300}
          onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <p> Height: {height} cm</p>
          <input
            type = 'range'
          step={1}
          min={130}
          max={300}
          onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <p>Your BMI is {BMI} </p>
      </div>
    </>
  )
}

export default App
