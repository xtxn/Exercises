class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    };
    increase(length) {
        return this.innerLength += length;
    };
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        };
        return this.innerLength;
    };
    toString() {
        let result = this.innerString;
        if (this.innerString.length > this.innerLength) {
            result = this.innerString.slice(0, this.innerLength) + "...";
        };
        return result;
    };
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test