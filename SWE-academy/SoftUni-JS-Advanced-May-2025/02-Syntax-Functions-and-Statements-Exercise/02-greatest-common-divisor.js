function greatestDivisor(num1, num2) {

    let remainder = num1 % num2;
    while (remainder != 0) {
        num1 = num2;
        num2 = remainder;
        remainder = num1 % num2;
    }
    console.log(num2);

}

greatestDivisor(15, 5);
greatestDivisor(2154, 458);
greatestDivisor(2378, 1769);

