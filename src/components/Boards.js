import React, { useState } from 'react'
import Square from './Square'
import "./Boards.css"

const Boards = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  }else {
    status = `Next player ${xIsNext ? 'X' : 'O'}`
  }
  

  const handleClick = (i) => {
    const newSquares = squares.slice(); // 배열 얕은 복사

    if(calculateWinner(newSquares) || newSquares[i]){
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares)
    // setXIsNext(!xIsNext);
    setXIsNext(prev => !prev); //매개변수에 state 값을 가져와서 사용할 수 있다.
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={()=>handleClick(i)}/>
  }     

  
  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
      </div>
      <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
    </div>
  )
}

export default Boards;