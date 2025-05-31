
function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('result');
    let addToDropDown = document.getElementById('selectMenuTo');
    const btn = document.querySelector('button');

    // adding options
    const binaryOpt = document.createElement('option');
    binaryOpt.value = 'binary';
    binaryOpt.textContent = 'Binary';
    addToDropDown.appendChild(binaryOpt);

    const hexOpt = document.createElement('option');
    hexOpt.value = 'hexadecimal';
    hexOpt.textContent = 'Hexadecimal';
    addToDropDown.appendChild(hexOpt);

    // calculating output

    btn.addEventListener('click', () => {
        const decimalInput = Number(input.value);
        let convertedResult = '';
        if (addToDropDown.value == 'binary') {
            convertedResult = functions.bin(decimalInput);
        }
        if (addToDropDown.value == 'hexadecimal') {
            convertedResult = functions.hex(decimalInput);
        }
        output.value = convertedResult;

    });

    let functions = {
        bin(num) {
            return num.toString(2);
        },

        hex(num) {
            return num.toString(16).toUpperCase();
        },
    }
}