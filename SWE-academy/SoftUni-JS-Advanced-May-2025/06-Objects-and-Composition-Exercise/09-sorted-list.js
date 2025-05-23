function createSortedList() {
    let list = {
        numbers: [],
        add(el) {
            this.numbers.push(el);
            this.numbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            }
        },

        get size() {
            return this.numbers.length;
        }
    }
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


