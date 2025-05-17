function equalNeighbors(matrix) {
    let pairsFound = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[i][j] === matrix[i][j + 1]) {
                pairsFound++;
            }
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                pairsFound++;
            }
        }
    }

    console.log(pairsFound);
    return pairsFound;
}


equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);