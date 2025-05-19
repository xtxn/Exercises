function spiralMatrix(rows, cols) {
    let matrix = Array(rows).fill().map(() => Array(cols).fill(0));
    let currentNum = 1;
    let topRow = 0;
    let bottomRow = rows - 1;
    let leftCol = 0;
    let rightCol = cols - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {

        // right
        for (let i = leftCol; i <= rightCol; i++) {
            matrix[topRow][i] = currentNum;
            currentNum++;
        }
        topRow++;

        // down
        for (let i = topRow; i <= bottomRow; i++) {
            matrix[i][rightCol] = currentNum;
            currentNum++;
        }
        rightCol--;

        //right
        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                matrix[bottomRow][i] = currentNum;
                currentNum++;
            }
        }
        bottomRow--;

        //up
        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                matrix[i][leftCol] = currentNum;
                currentNum++;
            }
        }
        leftCol++;
    }
    console.log(matrix.map((a) => a.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);