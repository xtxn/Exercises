function solve() {
  let input = document.getElementById('text');
  let inputArr = input.value.toLowerCase().split(' ');

  let command = document.getElementById('naming-convention')
  let outputText = '';

  if (command.value !== "Camel Case" && command.value !== "Pascal Case") {
    outputText = 'Error!';
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      if (i === 0) {
        if (command.value == "Camel Case") {
          continue;
        } else if (command.value == "Pascal Case") {
          inputArr[i] = toUpper(inputArr[i]);
        }
      } else {
        inputArr[i] = toUpper(inputArr[i])
      }
    }
    outputText = inputArr.join('');
  }

  let output = document.getElementById('result');
  output.textContent = outputText;

  function toUpper(string) {
    let word = string.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  }
}