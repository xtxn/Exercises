function orbit(arr) {
    let [width, height, starRow, starCol] = [...arr];
    let matrix = Array(height).fill().map(() => Array(width).fill(0));

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {

            let deltaRow = Math.abs(row - starRow);
            let deltaCol = Math.abs(col - starCol);
            let orbitDistane = Math.max(deltaRow, deltaCol);

            matrix[row][col] = orbitDistane + 1;
        }
    }
    console.log(matrix.map((a) => a.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2])