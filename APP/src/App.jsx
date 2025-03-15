import { useState } from 'react'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMore/LoadMore'
import './App.css'
import Tree from './components/treeView/tree'
import Main from './components/treeView/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StarRating star={10}/> */}

      {/* <ImageSlider />*/}

      {/* <LoadMore /> */}

      {/* <Tree /> */}
      <Main />

    </>
  )
}

export default App
