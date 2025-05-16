function sameNumbers(num) {

    let numArr = num.toString().split('')
    let firstNum = Number(numArr[0])
    let sum = numArr.reduce((acc, curr) => acc + Number(curr), 0);

    if (sum / numArr.length != firstNum) {
        console.log(false);
    } else {
        console.log(true);
    }
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);