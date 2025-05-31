function addItem() {

    const input = document.getElementById('newItemText');
    const list = document.getElementById('items')

    // creat new element
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    //delete input text
    input.value = '';
}