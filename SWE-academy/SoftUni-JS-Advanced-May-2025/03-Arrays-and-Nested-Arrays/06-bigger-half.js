function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let targetedHalf = Math.floor((arr.length) / 2)

    return (arr.slice(targetedHalf));
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);