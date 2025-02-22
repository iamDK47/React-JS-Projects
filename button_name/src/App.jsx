import React, { useState } from 'react';
import Btn from './components/Btn';

function App() {
  const array = ['saffi', 'dani', 'faizi', 'anser'];
  const [currentActive, setCurrentActive] = useState(null);

  const clicked = (id) => {
    setCurrentActive(id)
  }

  return (
    <>
    <div>
    {
      array.map((name,index) => {

       return <Btn 
        key={index}
        name={name}
        isActive={currentActive === index}
        click={clicked}
        id={index}
        />
      })
    }
    </div>
    </>
  );
}

export default App;