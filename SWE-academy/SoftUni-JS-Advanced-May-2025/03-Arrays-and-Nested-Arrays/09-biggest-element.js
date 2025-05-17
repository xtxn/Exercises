function biggestElement(array) {
    let biggest = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > biggest) {
                biggest = array[i][j];
            }
        }
    }

    return biggest;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]]);

biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])


// -> Using flat() and Math.max

// function biggestElement(array) {
//     let flat = array.flat();
//     let biggest = Math.max(...flat);

//     return biggest;

// }
