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


import React, { useState } from 'react';
import Btn from './components/Btn';

function App() {

  const arr = ['saffi', 'dani', 'faizi', 'anser']

  return (
    <>
    {
      arr.map((name,index) => 
      <Btn 
      key={index}
      name={name}
      />
      )
    }
    </>
  );
}

export default App;