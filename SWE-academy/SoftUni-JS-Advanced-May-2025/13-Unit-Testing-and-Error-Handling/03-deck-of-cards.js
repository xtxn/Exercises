function printDeckOfCards(cards) {

    function createCard(face, suit) {
        const facesEnum = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitsEnum = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        if (!facesEnum.includes(face) || !suitsEnum[suit]) {
            throw new Error(`Error`);
        }
        return {
            face,
            suit,
            toString() {
                return `${face}${suitsEnum[suit]}`;
            }
        };
    }

    let deck = [];
    for (const card of cards) {

        let face = card.slice(0, -1);
        let suit = card.split('').pop();

        try {
            deck.push(createCard(face, suit).toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(deck);
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

