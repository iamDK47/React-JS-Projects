import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [hasClicked, setHasClicked] = useState(false)

  useEffect(() => {
    // async function call() {
      // const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      // const namee = await data.json()
      // setImg(namee.sprites.front_default)
    // }; 
        
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(data => data.json())
      .then(data => setImg(data.sprites.front_default))

    if(hasClicked){
      // call()
      setHasClicked(false)
    }
  },[hasClicked])

  const show = () => {
    setHasClicked(true)
  }

  return (
    <>
      <div>
        <input
        value={name}
        placeholder='enter name'
        onChange={(e) => setName(e.target.value)}
        >
        </input>
        <button
        onClick={show}>
          CLICK
        </button>
        <div>
          <img src={img}/>
        </div>
      </div>
    </>
  )
}

export default App
