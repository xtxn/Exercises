function evenPosition(array) {
    let list = [];
    for (let i = 0; i < array.length; i += 2) {
        list.push(array[i]);

    }
    console.log(list.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);
