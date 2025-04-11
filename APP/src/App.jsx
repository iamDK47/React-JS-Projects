import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMore/LoadMore'
import Main from './components/treeView/Main'
import QR from './components/QRCode/QR'
import MainTheme from './components/ThemeSwitch/MainTheme'
import ScrollBar from './components/ScrollBar/ScrollBar'
import MainTab from './components/Tabs/MainTab'
import MainPop from './components/Popup/MainPop'
import Auto from './components/Search/Auto'
import TicTac from './components/TicTac/TicTac'
import ContextIndex from './components/Feature_Context/ContextIndex'
import Context from './components/Feature_Context/Context'
import FetchIndex from './components/useFetch/FetchIndex'


function App() {

  return (
    <>
      {/* <StarRating star={10}/> */}

      {/* <ImageSlider /> */}

      {/* <LoadMore /> */}

      {/* <Main /> */}

      {/* <QR /> */}

      {/* <MainTheme /> */}

      {/* <ScrollBar /> */}

      {/* <MainTab /> */}

      {/* <MainPop /> */}

      {/* <Auto /> */}

      {/* <TicTac /> */}

      {/* <Context>
        <ContextIndex />
      </Context> */}

      <FetchIndex/>

    </>
  )
}

export default App
