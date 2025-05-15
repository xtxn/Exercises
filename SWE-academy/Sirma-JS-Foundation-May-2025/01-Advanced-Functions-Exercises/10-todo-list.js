document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        const taskText = document.createTextNode(task);
        li.appendChild(taskText);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-button';
        removeBtn.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

