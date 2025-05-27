function solve() {
  let inputTextArea = document.getElementById('input');
  let inputText = inputTextArea.value;
  let sentance = inputText.split('.').map(s => s.trim()).filter(s => s.length > 0);

  let output = document.getElementById('output');

  let formatted = [];
  for (let i = 0; i < sentance.length; i++) {
    formatted.push(sentance[i]);
    if (formatted.length === 3 || i === sentance.length - 1) {
      output.innerHTML += `<p>${formatted.join('.')}.</p>`
      formatted = [];
    }
  }
}


