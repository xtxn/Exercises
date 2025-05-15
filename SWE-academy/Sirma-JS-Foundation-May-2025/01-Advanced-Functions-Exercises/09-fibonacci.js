function getFibonacci() {
    let a = 0, b = 1;

    return function () {
        const current = a;
        const next = a + b;
        a = b;
        b = next;
        return current;

    };
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21