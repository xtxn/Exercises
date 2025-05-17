function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr.slice(0, 2));
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);