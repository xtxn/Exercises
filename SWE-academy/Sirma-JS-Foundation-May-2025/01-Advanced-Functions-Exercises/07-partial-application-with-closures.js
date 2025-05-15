function sumFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

function partialSum(num) {
    return function (num1, num2, num3) {
        return sumFourNumbers(num, num1, num2, num3);
    }
}


const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11