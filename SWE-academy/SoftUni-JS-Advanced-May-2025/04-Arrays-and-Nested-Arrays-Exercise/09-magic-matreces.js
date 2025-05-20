function magicMatreces(arr) {
    let isMagical = true;

    let rowSum = arr[0].reduce((acc, curr) => acc + curr, 0);
    let colSum = 0;
    for (let i = 0; i < arr.length; i++) {
        colSum += arr[i][0];
    }

    for (let i = 0; i < arr.length; i++) {
        let checkRow = 0;
        let checkCol = 0;
        for (let j = 0; j < arr.length; j++) {
            checkRow += arr[i][j];
            checkCol += arr[j][i]
        }
        if (checkRow !== rowSum || checkCol !== colSum) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}

magicMatreces([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatreces([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatreces([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);