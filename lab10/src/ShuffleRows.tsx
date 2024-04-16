const shuffleRows = (board: (number | '')[][]): (number | '')[][] => {
    const shuffledBoard = [...board]; // Создаем копию игрового поля

    // Перемешиваем строки внутри каждой группы (от первой до третьей, от четвертой до шестой, от седьмой до девятой)
    for (let startRow = 0; startRow < shuffledBoard.length; startRow += 3) {
        const endRow = Math.min(startRow + 3, shuffledBoard.length);
        const groupRows = shuffledBoard.slice(startRow, endRow);
        const shuffledGroupRows = groupRows.sort(() => Math.random() - 0.5);
        shuffledBoard.splice(startRow, 3, ...shuffledGroupRows);
    }

    return shuffledBoard;
};
export default shuffleRows