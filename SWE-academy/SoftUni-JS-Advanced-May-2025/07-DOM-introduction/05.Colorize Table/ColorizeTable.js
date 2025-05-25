function colorize() {
    let table = document.querySelectorAll('tr:nth-child(even)');

    for (const row of table) {
        row.style.background = 'teal';
    }
}