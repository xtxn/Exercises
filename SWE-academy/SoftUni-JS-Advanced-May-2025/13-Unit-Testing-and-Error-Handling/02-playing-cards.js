function cards(face, suit) {
    let facesEnum = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suitsEnum = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (!facesEnum.includes(face) || !suitsEnum[suit]) {
        throw new Error('Error');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suitsEnum[suit]}`;
        }
    };
}

cards('A', 'S').toString();
cards('10', 'H').toString();
cards('1', 'C').toString();


