function encodeAndDecodeMessages() {
    const inputs = document.querySelectorAll('textarea');
    const encodeInput = inputs[0];
    const decodeInput = inputs[1];

    const btns = document.querySelectorAll('button')
    const encodeBtn = btns[0];
    const decodeBtn = btns[1];

    encodeBtn.addEventListener('click', () => {
        let result = '';
        const textToEncode = encodeInput.value;
        for (const symbol of textToEncode) {
            let symboAsci = symbol.charCodeAt();
            result += String.fromCharCode(symboAsci + 1);
        }
        decodeInput.value = result;
        encodeInput.value = '';
    });

    decodeBtn.addEventListener('click', () => {
        let result = '';
        const textToDecode = decodeInput.value;
        for (const symbol of textToDecode) {
            let symbolAsci = symbol.charCodeAt();
            result += String.fromCharCode(symbolAsci - 1);
        }
        decodeInput.value = result;
    });
}