import React, { useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

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

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {
        tabs.map((tab, index) =>
          <button className='Btn' key={index} onClick={() => setActiveTab(index)}>
            {tab.name}
          </button>

        )}
        <div>
          {tabs[activeTab].content}
        </div>
    
    </div>
  )
}

export default MainTab