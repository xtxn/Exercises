function addRemoveElements(array) {
    let initialNum = 1;
    let result = [];
    for (const command of array) {
        if (command == 'add') {
            result.push(initialNum);
            initialNum++;
        } else if (command == "remove") {
            result.pop(initialNum);
            initialNum++;
        }
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join("\n"));
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);