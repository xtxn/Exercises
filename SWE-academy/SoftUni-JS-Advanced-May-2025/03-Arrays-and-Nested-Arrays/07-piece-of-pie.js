function pieceOfPie(arr, firstFalvor, secondFlavor) {
    let newList = [];
    const startIndex = arr.indexOf(firstFalvor);
    const endIndex = arr.indexOf(secondFlavor);
    newList = arr.slice(startIndex, endIndex + 1);

    return newList;
}

pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');

pieceOfPie([
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')