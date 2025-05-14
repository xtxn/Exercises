function sumOfNumbers(n, m) {
    let result = 0;
    n = Number(n);
    m = Number(m);
    for (let i = n; i <= m; i++) {
        result += i;
    }
    return result;
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');