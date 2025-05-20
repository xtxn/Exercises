function extract(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    let biggest = arr[0];
    let filtered = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            filtered.push(arr[i]);
            biggest = arr[i];
        }
    }
    return filtered;

}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 2, 3, 4]));
console.log(extract([20, 3, 2, 15, 6, 1]));
console.log(extract('4'));
