function cooking(number, op1, op2, op3, op4, op5) {
    let startingPoint = Number(number);

    let operations = [op1, op2, op3, op4, op5];

    for (const operation of operations) {
        switch (operation) {
            case "chop": number /= 2;
                break;
            case "dice": number = Math.sqrt(number);
                break;
            case "spice": number++;
                break;
            case "bake": number *= 3;
                break;
            case "fillet": number *= 0.80;
                break;
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');