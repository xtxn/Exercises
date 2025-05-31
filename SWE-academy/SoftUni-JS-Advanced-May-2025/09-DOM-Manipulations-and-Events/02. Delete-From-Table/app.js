function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    let inputEmail = input.value.trim();

    const table = document.querySelectorAll('tbody tr');
    let result = document.getElementById('result');

    let isMatch = false;

    for (const row of table) {
        let emailCell = row.children[1];

        if (emailCell.textContent == inputEmail.toLowerCase()) {
            row.remove();
            isMatch = true;
        }
        if (isMatch) {
            result.textContent = 'Deleted';
        } else {
            result.textContent = 'Not found.';
        }
    }
    input.value = '';
}