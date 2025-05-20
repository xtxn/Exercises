function sortByTwo(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.sort((a, b) => a.length - b.length);

    console.log(arr.join('\n'))
}

sortByTwo(['alpha', 'beta', 'gamma']);
sortByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortByTwo(['test', 'Deny', 'omen', 'Default']);