import { useState } from 'react';

// Button Component
const Btn = ({ name, id }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button 
      onClick={() => setClicked(prev => !prev)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
    >
      <span>{name}</span>
      <span>{clicked ? "X" : "Y"}</span>
    </button>
  );
};

// Main App Component
const App = () => {
  const names = ["faizi", "saffi", "anser", "rahib"];

  return (
    <div className="p-4 space-y-2">
      {names.map((name, index) => (
        <Btn 
          key={index} 
          name={name} 
          id={index}
        />
      ))}
    </div>
  );
};

export default App;