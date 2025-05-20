function sortNums(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return arr;
    }

    arr.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < arr.length / 2; i++) {

        if (i != arr.length - i - 1) {
            result.push(arr[i]);
            result.push(arr[arr.length - 1 - i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18]));
console.log(sortNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
console.log(sortNums([22]));
console.log(sortNums('sa'));
console.log(sortNums([0, 0, -1, 2, 'p', 0,]));
