function addHint(board: (number|'')[][], fullBoard: (number|'')[][]): (number|'')[][]{
    const newBoard: (number|'')[][] = [...board]; // Создаем копию игрового поля
    //const newBoard: (number|'')[][] = board.map(row => [...row]); // Создаем копию игрового поля
    const emptyCells = []; // Массив для хранения пустых ячеек
    // Заполняем массив пустых ячеек
    for (let row = 0; row < newBoard.length; row++) {
        for (let col = 0; col < newBoard[row].length; col++) {
            if(board[row][col] === '')
                emptyCells.push([row, col]);
        }
    }
    if(emptyCells.length === 0) return newBoard;

    emptyCells.sort(() => Math.random() - 0.5);

    const randomIndex = (): number => {
        return Math.floor(Math.random() * emptyCells.length);
    };
    let rand = randomIndex()
    let [row,col] = emptyCells[rand]
    emptyCells.slice(rand,1)
    newBoard[row][col] = fullBoard[row][col];

    return newBoard;
}
export default addHint;