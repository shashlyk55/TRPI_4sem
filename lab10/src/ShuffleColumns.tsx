const shuffleColumns = (board: (number | '')[][]): (number | '')[][] => {
    const shuffledBoard = [...board]; // Создаем копию игрового поля

    // Перемешиваем столбцы внутри каждой группы (от первой до третьей, от четвертой до шестой, от седьмой до девятой)
    for (let startCol = 0; startCol < shuffledBoard[0].length; startCol += 3) {
        const endCol = Math.min(startCol + 3, shuffledBoard[0].length);

        // Выделяем группу столбцов
        const groupColumns: (number | '')[][] = [];
        for (let i = 0; i < shuffledBoard.length; i++) {
            groupColumns.push(shuffledBoard[i].slice(startCol, endCol));
        }
    }

    return shuffledBoard;
};
export default shuffleColumns