function addItem() {
    const input = document.getElementById('newItemText');
    const list = document.getElementById('items')

    // create new element
    const li = document.createElement('li');
    li.textContent = input.value;

    // create delete
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]'
    deleteBtn.href = '#';
    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    //delete input text
    input.value = '';
}