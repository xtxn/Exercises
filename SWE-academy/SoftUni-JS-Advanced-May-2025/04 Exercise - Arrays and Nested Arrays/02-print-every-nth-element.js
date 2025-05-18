function printNthElement(array, n) {
    return array.filter((v, i) => i % n == 0);
}

console.log(printNthElement(['5', '20', '31', '4', '20'], 2));
console.log(printNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printNthElement(['1', '2', '3', '4', '5'], 6));


