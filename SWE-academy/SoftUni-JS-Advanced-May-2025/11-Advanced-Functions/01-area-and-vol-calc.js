function solve(area, vol, input) {
    let obj = JSON.parse(input);
    let result = [];

    for (const line of obj) {

        let current = {};
        current.area = area.call(line);
        current.volume = vol.call(line)
        result.push(current);
    }
    return result;
}


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let first = solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);

console.log(first);
