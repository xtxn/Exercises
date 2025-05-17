function firstLastSum(arr) {
    if (arr.length > 0) {
        let firstNum = Number(arr[0]);
        let lastNum = Number(arr[arr.length - 1]);
        let sum = firstNum + lastNum;
        console.log(sum);
    }
}

firstLastSum(['20', '30', '40']);
firstLastSum(['5', '10']);