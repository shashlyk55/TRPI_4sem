import {ReactElement} from "react";

function compareAndHighlightErrors(originalBoard: (number|'')[][], userBoard: (number|'')[][]): void {
    const rows = originalBoard.length;
    const cols = originalBoard[0].length;
    let isError = false;

    // Reset all cell colors to default
    const allCells = document.querySelectorAll('.sudoku-row input');
    allCells.forEach((cell: any) => {
        cell.style.backgroundColor = '';
    });

    // Compare original board with user board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (originalBoard[i][j] !== userBoard[i][j]) {
                isError = true;
                // Error found, highlight corresponding row, column, and square
                const rowCells = document.querySelectorAll(`.sudoku-row:nth-child(${i + 1}) input`);
                rowCells.forEach((cell: any) => {
                    cell.style.backgroundColor = 'red';
                });

                const colCells = document.querySelectorAll(`.sudoku-row input:nth-child(${j + 1})`);
                colCells.forEach((cell: any) => {
                    cell.style.backgroundColor = 'red';
                });

                const startRow = Math.floor(i / 3) * 3;
                const startCol = Math.floor(j / 3) * 3;
                for (let x = startRow; x < startRow + 3; x++) {
                    for (let y = startCol; y < startCol + 3; y++) {
                        const cell = document.querySelector(`.sudoku-row:nth-child(${x + 1}) input:nth-child(${y + 1})`) as HTMLElement;
                        cell.style.backgroundColor = 'red';
                    }
                }
            }
        }
    }
    if(!isError){
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                allCells.forEach((cell: any) => {
                    cell.style.backgroundColor = 'yellow';
                });
            }
        }
        setTimeout(function(){
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    allCells.forEach((cell: any) => {
                        cell.style.backgroundColor = '';
                    });
                }
            }
        },500);

    }
}

export default compareAndHighlightErrors;
