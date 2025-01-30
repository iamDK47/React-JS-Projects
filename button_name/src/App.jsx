import React, { useState } from 'react';
import Btn from './components/Btn';

function App() {
  const array = ['saffi', 'dani', 'faizi', 'anser'];
  const [currentState, setCurrentState] = useState(null);

  const buttons = []; // Array to hold the Btn components

  for (let i = 0; i < array.length; i++) {
    buttons.push(
      <Btn
        key={i} // Key is essential for React to efficiently update the list
        name={array[i]}
        isActive={currentState === i} // Strict equality is generally preferred
        click={(id) => setCurrentState(id)}
        id={i}
      />
    );
  }

  return (
    <div>
      <div>
        {buttons} {/* Render the array of buttons */}
      </div>
    </div>
  );
}

export default App;