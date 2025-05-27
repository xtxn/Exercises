function subtract() {

    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;

    let sum = Number(num1) - Number(num2);

    let output = document.getElementById('result');
    output.textContent = sum;
}