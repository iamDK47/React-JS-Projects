import { useState } from 'react'
import './App.css'
import FAQ from './components/FAQ'


function App() {

  return (
    <>
    
    {QUEST.map((queries) => 
    <FAQ key={queries.id} question={queries.quest} answer={queries.ans}/>)}
  
    </>
  )}

const QUEST = [
  {id: 1,
    quest:"hello how r u",
    ans: "yes i am fine"
  },
  {id: 2,
    quest:"hello how r u",
    ans: "NOTT FINE"
  },
  {id: 3,
    quest:"hello how r u",
    ans: "no"
  }

]

export default App
