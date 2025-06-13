class List {
    result = [];
    size = 0;

    add(element) {
        this.result.push(element);
        this.result.sort((a, b) => a - b);
        this.size = this.result.length;
        return this;
    }
    remove(index) {
        if (index < 0 || index > this.result.length - 1) {
            throw new Error("The index is outside the array");
        }
        this.result.splice(index, 1);
        this.size = this.result.length;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.result.length - 1) {
            throw new Error("The index is outside the array");
        }
        return this.result[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

