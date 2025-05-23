function calorieObj(arr) {
    let calories = {};
    for (let i = 0; i < arr.length - 1; i += 2) {
        calories[arr[i]] = Number(arr[i + 1]);
    }
    console.log(calories);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);