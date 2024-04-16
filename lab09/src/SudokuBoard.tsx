import React, {ReactElement, useState} from 'react';
import compareAndHighlightErrors from './Checker'
import SudokuCell from './SudokuCell'
import fillRandomCells from './NewGame'

const SudokuBoard = (props: { initialBoard: (number|'')[][], fullBoard: (number|'')[][] }) => {
    //const [board, setBoard] = useState<(number|'')[][]>(fillRandomCells(props.fullBoard));
    const [board, setBoard] = useState<(number|'')[][]>(props.initialBoard);
    //const [board, setBoard] = useState<(number|'')[][]>(fillRandomCells(props.initialBoard));

    const handleCellChange = (row: number, col: number, newValue: number | '') => {
        const newBoard = [...board];
        if (typeof newValue === "number") {
            newBoard[row][col] = newValue;
        }
        setBoard(newBoard);
    };

    const handleCheckSolution = () => {
        compareAndHighlightErrors(props.fullBoard,board)
        //compareAndHighlightErrors(props.fullBoard,props.initialBoard)
    };

    const handleNewGame = () => {
        setBoard(fillRandomCells(props.initialBoard))
    };

    return (
        <div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, colIndex) => (
                        <SudokuCell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onChange={(newValue) => handleCellChange(rowIndex, colIndex, newValue)}
                        />
                    ))}
                </div>
            ))}
            <button onClick={handleCheckSolution}>Check Solution</button>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
};

export default SudokuBoard;
