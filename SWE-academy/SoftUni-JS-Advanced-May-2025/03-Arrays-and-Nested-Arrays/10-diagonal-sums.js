function diagonalSums(matrix) {
    let firstDiaglonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix[0].length; i++) {  //whole matrices
        firstDiaglonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${firstDiaglonal} ${secondDiagonal}`);

}

diagonalSums([
    [20, 40],
    [10, 60]
]);

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);