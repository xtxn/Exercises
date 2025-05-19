function ticTacToe(moves) {
    const first = 'X';
    const second = 'O'
    let currentPlayer = first;

    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    for (const move of moves) {
        let [x, y] = move.split(' ');

        // current move
        if (board[x][y] == false) {
            board[x][y] = currentPlayer;
            currentPlayer == first ? currentPlayer = second : currentPlayer = first;
        } else {
            console.log('This place is already taken. Please choose another!');
        }

        //check for winner - row, columns and diagonals 
        for (let j = 0; j < board.length; j++) {

            let rowCheck = board[j];
            let colCheck = [];
            let firstDiagonal = [];
            let secondDiagonal = [];
            let checkArr = [];

            for (let k = 0; k < board.length; k++) {
                colCheck.push(board[k][j]);
                firstDiagonal.push(board[k][k]);
                secondDiagonal.push(board[k][board.length - 1 - k]);
            }

            checkArr = [rowCheck, colCheck, firstDiagonal, secondDiagonal];

            for (const check of checkArr) {

                if (!check.includes(false) && !check.includes('O')) {
                    console.log(`Player ${first} wins!`);
                    console.log(board.map(a => a.join('\t')).join('\n'));
                    return;
                } else if (!check.includes(false) && !check.includes('X')) {
                    console.log(`Player ${second} wins!`);
                    console.log(board.map(a => a.join('\t')).join('\n'));
                    return;
                } else if (!board.flat().includes(false)) {
                    console.log('The game ended! Nobody wins :(');
                    console.log(board.map(a => a.join('\t')).join('\n'));
                    return;
                }
            }
        }
    }
}

ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]);
ticTacToe(
    ["0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"]);
ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]);


