function jansNotation(arr) {
    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    let final = [];

    for (let i = 0; i < arr.length; i++) {
        let instruction = arr[i];
        if (!Number(instruction)) {

            if (final.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let result = operators[instruction](final[final.length - 2], final[final.length - 1]);
            final.splice(final.length - 2, 2, result);
        } else {
            final.push(arr[i])
        }
    }
    if (final.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(final[0]);
    }
}

jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3]);