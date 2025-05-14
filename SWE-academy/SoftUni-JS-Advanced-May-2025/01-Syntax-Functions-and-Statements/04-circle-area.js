function circleArea(input) {
    if (typeof (input) != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`);
    } else {
        let r = Math.PI * Math.pow(input, 2);
        console.log(r.toFixed(2));
    }
}

circleArea(5);
circleArea('name');