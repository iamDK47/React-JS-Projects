import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [poki, setPoki] = useState(null)
  const [img, setImg] = useState('')
  const [hasClicked, setHasClicked] = useState(false)

  useEffect(() => {
    async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const namee = await data.json()
      setPoki(namee)
      setImg(namee.sprites.back_female)
    }; 
    // if(hasClicked){
    //   setHasClicked(false)
    // }
  },[hasClicked])

  // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  // .then(data => data.json())
  // .then(data => setPoki(data))

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
