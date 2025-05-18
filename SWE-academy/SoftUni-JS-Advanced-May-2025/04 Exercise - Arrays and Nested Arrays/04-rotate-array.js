function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        const last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4'], 2);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

