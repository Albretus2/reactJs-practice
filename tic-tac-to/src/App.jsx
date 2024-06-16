import { useState } from "react";

function Square({ value, onSquareClcik }) {
  return (
    <button className="square" onClick={onSquareClcik}>
      {value}
    </button>
  );
}

function calculateWinner(square) {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (square[a] === square[b] && square[b] === square[c]) {
      return square[a];
    }
  }

  return false;
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();

    nextSquare[i] = xIsNext ? "X" : "O";

    onPlay(nextSquare);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = `winner: ${winner}`;
  } else {
    status = `next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClcik={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClcik={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClcik={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClcik={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClcik={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClcik={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClcik={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClcik={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClcik={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 == 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let deskripsi = "";
    deskripsi = move > 0 ? `Move to #${move}` : "go to start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{deskripsi}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="gameBoard">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="gameInfo">
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
