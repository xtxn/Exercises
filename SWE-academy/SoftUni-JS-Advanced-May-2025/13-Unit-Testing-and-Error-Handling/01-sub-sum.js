function subSum(array, start, end) {
    let sum = 0;

    if (Array.isArray(array) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > array.length - 1) {
        end = array.length - 1;
    }

    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }
    return sum;
};

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);