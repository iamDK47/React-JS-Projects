import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMore/LoadMore'
import Main from './components/treeView/Main'
import QR from './components/QRCode/QR'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating star={10}/> */}

      {/* <ImageSlider />*/}

      {/* <LoadMore /> */}

      {/* <Main /> */}

      <QR />

    </>
  )
}

export default App
