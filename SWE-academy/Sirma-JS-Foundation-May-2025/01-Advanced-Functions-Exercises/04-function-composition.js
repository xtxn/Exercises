function double(n) {
    return n * 2;
}
function square(n) {
    return n * n;
}

function compose(func1, func2) {
    return function (n) {
        return func2(func1(n));
    }
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36