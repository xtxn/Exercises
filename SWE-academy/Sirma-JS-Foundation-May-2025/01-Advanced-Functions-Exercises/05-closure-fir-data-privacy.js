function createPrivateCounter() {
    let count = 0;

    function increment() {
        return count++;
    }
    function getCount() {
        return count;

    }
    return {
        increment,
        getCount,
    }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1