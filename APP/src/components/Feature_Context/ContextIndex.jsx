import React, { useContext } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import TicTac from '../TicTac/TicTac'
import Main from '../treeView/Main'
// import {featureContext} from './Context'
import { featureContext } from './ContextCreate.jsx'

function ContextIndex() {

    const {response}  = useContext(featureContext)

  const arrayOfToggles = [
    {
      key : 'showImageSlider',
      value : <ImageSlider/>
    },
    {
      key : 'showTreeView',
      value : <Main/>
    },
    {
      key : 'showTicTacToeBoard',
      value : <TicTac/>
    }
  ]

  const toggleChecker = (id) => {
    if(!response) return false;
    return response[id]
  }
 
  return (
    <div>
    {arrayOfToggles.map((Obj,index) => 
    toggleChecker(Obj.key) ? 
    <div key={index}>
    {Obj.value}
    </div> : null
    )}
    </div>
  )
}

export default ContextIndex