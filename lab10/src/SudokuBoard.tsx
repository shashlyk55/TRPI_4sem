import React, {ReactElement, useEffect, useState} from 'react';
import compareAndHighlightErrors from './Checker'
import SudokuCell from './SudokuCell'
import fillRandomCells from './NewGame'
import {useHotkeys} from "react-hotkeys-hook";
import addHint from "./Podskazki";
import shuffleColumns from "./ShuffleColumns";

const SudokuBoard = (props: { initialBoard: (number|'')[][], fullBoard: (number|'')[][] }) => {
    //const [board, setBoard] = useState<(number|'')[][]>(fillRandomCells(props.fullBoard));
    const [board, setBoard] = useState<(number|'')[][]>(props.initialBoard);

    //const [rightBoard, setRightBoard] = useState(props.fullBoard)

    const handleCellChange = (row: number, col: number, newValue: number | '') => {
        const newBoard = [...board];
        if (typeof newValue === "number") {
            newBoard[row][col] = newValue;
        }
        setBoard(newBoard);
        compareAndHighlightErrors(props.fullBoard,board)
    };

    const handleCheckSolution = () => {
        compareAndHighlightErrors(props.fullBoard,board)
    };

    const handleNewGame = () => {
        setBoard(fillRandomCells(props.initialBoard))
    };

    // Горячие кавиши Новая Игра
    const handleHotKeysNewGame = () =>{
        setBoard(fillRandomCells(props.initialBoard))
    }
    useHotkeys('alt+n',handleHotKeysNewGame)

    // Горячие клавиши Подсказка
    const handleHotKeysHint = () =>{
        setBoard(addHint(board,props.fullBoard));
    }
    useHotkeys('alt+h',handleHotKeysHint);

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
