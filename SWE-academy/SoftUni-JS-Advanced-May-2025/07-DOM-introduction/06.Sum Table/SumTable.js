function sumTable() {

    let tableRows = document.querySelectorAll('tbody tr');

    let rows = Array.from(tableRows).slice(1, -1);
    let cols = rows.map(r => r.children[r.children.length - 1]);

    let sum = 0;
    for (const el of cols) {
        sum += Number(el.textContent);
    }

    let output = document.getElementById('sum');
    output.textContent = sum;
}   