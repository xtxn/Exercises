function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }

    }
}

console.log(multiply(2)(3)(4)); // Output: 24