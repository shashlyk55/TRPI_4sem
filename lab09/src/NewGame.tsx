const fillRandomCells = (board: (number|'')[][]): (number|'')[][] => {
    const newBoard = board.map(row => [...row]); // Создаем копию игрового поля

    const emptyCells = []; // Массив для хранения пустых ячеек
    const allCells = document.querySelectorAll('.sudoku-row input');

    allCells.forEach((cell: any) => {
        cell.style.backgroundColor = '';
    });

    // Заполняем массив пустых ячеек
    for (let row = 0; row < newBoard.length; row++) {
        for (let col = 0; col < newBoard[row].length; col++) {
            emptyCells.push([row, col]);
        }
    }

    // Перемешиваем массив пустых ячеек
    emptyCells.sort(() => Math.random() - 0.5);

    // Заполняем первые 30 случайных пустых ячеек пустыми значениями
    for (let i = 0; i < 30; i++) {
        const [row, col] = emptyCells[i];
        newBoard[row][col] = '';
    }

    return newBoard;
};

export default fillRandomCells;
