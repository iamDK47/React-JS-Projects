// import React, { useEffect, useState } from 'react'
// import Box from './Box'
// import './Style.css'

// function TicTac() {
//  const [player, setPlayer] = useState(false)
//  const [boxx, setBoxx] = useState(Array(9).fill(null))
// //  const [state, setState] = useState(x,y,z)


// const winFunc = (id) => {
//   const win =  [[0, 1, 2],
//                 [0, 4, 8],
//                 [0, 3, 6],
//                 [1, 4, 7],
//                 [2, 5, 8],
//                 [2, 4, 6],
//                 [3, 4, 5],
//                 [6, 7, 8]]

//   for (let i = 0; i < win.length; i++) {
//     const [x,y,z] = win[i];
    
//     if(
//       boxx[id] === x &&
//       boxx[id] === y &&
//       boxx[id] === z
//     ) return <div> Player WON!</div>
//   }

// }

//  const clickFunc = (id) => {
//   if(boxx[id] === null){
//    const newBoxx = [...boxx]
//    newBoxx[id] = player ? 'X' : 'O'
//    setBoxx(newBoxx)
//    setPlayer(prev => !prev)
//   }
//   winFunc(id)
//  }



//  return (
//   <div className='container'>
//   <div className='Main'>
//    <div className='Clm1'>
//     {[0, 1, 2].map((index) =>
//       <Box 
//       clicker={ clickFunc} 
//       value={boxx[index]} 
//       id={index}  
//       key={index} 
//       />
//      )}
//    </div>
//    <div className='Clm1'>
//     {[3, 4, 5].map((index) =>
//       <Box 
//       clicker={ clickFunc} 
//       value={boxx[index]} 
//       id={index} 
//       key={index} 
//       />
//      )}
//    </div>
//    <div className='Clm1'>
//     {[6, 7, 8].map((index) =>
//       <Box 
//       clicker={ clickFunc} 
//       value={boxx[index]} 
//       id={index} 
//       key={index} 
//       />
//      )}
//    </div>
//   </div>
//    <p className='P'>Player {player ? "2's" : "1's"} turn</p>
//    <button onClick={winFunc}>clicker</button>
//      </div>
//  )
// }

// export default TicTac

import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTac() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  // useEffect(() => {
    
  // },[squares])

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    }
     else if (getWinner(squares)) {
       setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
      } 
      else {
        setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  // console.log(squares);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}