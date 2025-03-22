import React, { act, useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import './style.css'

// function MainTab() {

//   const [activeTab, setActiveTab] = useState('Tab1')

//   return (
//     <div>
//       <div>
//       <button 
//       onClick={() => setActiveTab('Tab1')}
//       className='Btn-1'
//       style={{backgroundColor : 'red'}}>
//         Tab 1
//       </button>
//       <button onClick={() => setActiveTab('Tab2')}
//        className='Btn-2'>
//         Tab 2
//       </button>
//       </div>
//       <div>
//         {activeTab === 'Tab1' && <div> <Comp1 /> </div>}
//         {activeTab === 'Tab2' && <div> <Comp2 /> </div>}
//       </div>
//     </div>

//   )
// }

// export default MainTab


const tabs = [
  {
    name: 'tab1',
    content: <div>Content for tab1</div>
  },
  {
    name: 'tab2',
    content: <div>Content for tab2</div>
  },
  {
    name: 'tab3',
    content: <div>Content for tab3</div>
  }
]

function MainTab() {

  const [activeTab, setActiveTab] = useState(new Array(tabs.length).fill(false))
  const [content, setContent] = useState(0)

  // [0,0,0]

  console.log(activeTab)
  const change = (index) => {
    setActiveTab((prev) => { 
     let newArr = [...prev]
      newArr[index] = activeTab[index] === index ? false : index 
      return newArr
    })
    setContent(index)
  }
  console.log(activeTab)

  return (
    <div>
      {tabs.map((tab, index) => {
        return   <button
        className={activeTab[index] === index ? 'Active' : 'notActive'}
        key={index}
        onClick={() => change(index)}>
            {tab.name}
          </button>
      }
        )}
        <div>
        {tabs[content].content}
      </div>

    </div>
  )
}

export default MainTab