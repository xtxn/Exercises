function generateReport() {

    let result = [];

    const head = document.querySelectorAll('thead tr th');
    console.log(head);

    const iterate = document.querySelectorAll('tbody tr');
    let output = document.getElementById('output');

    for (const row of iterate) {
        output.value = '';
        let current = {};

        for (let i = 0; i < head.length; i++) {
            let checkbox = head[i].querySelector('input');

            if (checkbox.checked) {
                current[head[i].textContent.toLowerCase().trim()] = row.children[i].textContent;
            }
        }
        result.push(current);
    }
    output.value = JSON.stringify(result);

}