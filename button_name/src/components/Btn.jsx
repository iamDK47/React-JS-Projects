import { useState } from 'react';

const Btn = ({ name, id, isActive, onClick }) => {
  return (
    <button 
      onClick={() => onClick(id)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
    >
      <span>{name}</span>
      <span>{isActive ? "Y" : "X"}</span>
    </button>
  );
};

const App = () => {
  const names = ["faizi", "saffi", "anser", "rahib"];
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id === activeButton ? null : id);
  };

  return (
    <div className="p-4 space-y-2">
      {names.map((name, index) => (
        <Btn 
          key={index} 
          name={name} 
          id={index}
          isActive={activeButton === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default App;