function diagonalAttack(arr) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let matrix = arr.map(a => a.split(' '));

    //calculate the diagonals
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += Number(matrix[i][i]);
        secondDiagonalSum += Number(matrix[i][matrix.length - 1 - i]);
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {

                if (j != i && j != matrix.length - 1 - i) {
                    matrix[i][j] = firstDiagonalSum;
                }
            }
        }
        console.log(matrix.map(a => a.join(' ')).join('\n'));
    } else {
        console.log(arr.join('\n'));
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);