import { useState } from 'react'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMore/LoadMore'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating star={10}/> */}

      {/* <ImageSlider />*/}

      <LoadMore />

    </>
  )
}

export default App
