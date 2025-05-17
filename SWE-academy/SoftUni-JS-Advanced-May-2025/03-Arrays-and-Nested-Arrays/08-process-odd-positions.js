function processOddPos(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    result = result.map(a => a * 2).reverse();

    return result.join(' ');
}

processOddPos([10, 15, 20, 25]);
processOddPos([3, 0, 10, 4, 7, 3]);