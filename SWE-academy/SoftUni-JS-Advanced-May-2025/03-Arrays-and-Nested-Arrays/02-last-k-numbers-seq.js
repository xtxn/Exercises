function lastNumSeq(n, k) {
    let initArr = [1];

    for (let i = 1; i < n; i++) {
        let currentSum = 0;
        let startIndex;

        if (i < k) {
            startIndex = 0;
        } else {
            startIndex = i - k;
        }
        for (let j = startIndex; j < i; j++) {

            currentSum += initArr[j];
        }
        initArr.push(currentSum);
    }
    console.log(initArr);

    return initArr;
}

lastNumSeq(6, 3);
lastNumSeq(8, 2);
