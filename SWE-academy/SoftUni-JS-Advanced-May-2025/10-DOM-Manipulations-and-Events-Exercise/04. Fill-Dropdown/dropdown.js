function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    let option = document.createElement('option');

    // let text = textInput.value;
    // let value = valueInput.value;
    if (textInput.value == '' || valueInput.value == '') {
        return;
    }
    option.value = valueInput.value;
    option.textContent = textInput.value;

    const dropdownInput = document.getElementById('menu');
    dropdownInput.appendChild(option);
    textInput.value = '';
    valueInput.value = '';
}