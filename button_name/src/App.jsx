// import React, { useState } from 'react';
// import Btn from './components/Btn';

// function App() {
//   const array = ['saffi', 'dani', 'faizi', 'anser'];
//   const [currentActive, setCurrentActive] = useState(null);

//   const clicked = (id) => {
//     setCurrentActive( currentActive === id ? null : id)
//   }

//   return (
//     <>
//     <div>
//     {
//       array.map((name,index) => {

//        return <Btn 
//         key={index}
//         name={name}
//         isActive={currentActive === index}
//         click={clicked}
//         id={index}
//         />
//       })
//     }
//     </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Btn from './components/Btn';

// function App() {

//   const arr = ['saffi', 'dani', 'faizi', 'anser']

//   return (
//     <>
//     {
//       arr.map((name,index) => 
//       <Btn 
//       key={index}
//       // name={name}
//       />
//       )
//     }
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Btn from './components/Btn';

function App() {

  const arr = ['saffi', 'dani', 'faizi', 'anser']

  // const [state, setState] = useState(Array(arr.length).fill(false))

  // const clicked = (id) => {
  //   setState(prev => 
  //     prev.map((state,index) => (index === id ? !state : state)
  //   ))
  // };
  
  const [state, setState] = useState({})

  const clicked = (id) => {
    setState((prev) => ({
      ...prev,           
      [id]: !prev[id]    
    }));
  }

  return (
    <>
    {arr.map((name,index) => 
    <Btn 
    click={clicked}
    key={index}
    name={name}
    active={state[index]}
    id={index}
    />
    )}
    </>
  );
}

export default App;