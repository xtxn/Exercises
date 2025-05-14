function squareOfStars(n = 5) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();
