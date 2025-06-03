function solution() {
    let internalString = '';

    return {
        append(string) {
            internalString += string;
        },
        removeStart(i) {
            internalString = internalString.slice(i);
        },
        removeEnd(i) {
            internalString = internalString.slice(0, -i);
        },
        print() {
            console.log(internalString);
        }
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

