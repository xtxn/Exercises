function upperCase(string) {
    let regexp = /[\W]/;
    let wordArr = string.split(regexp);
    wordArr = wordArr.filter(x => x != '');

    let finalResult = wordArr.join(', ').toUpperCase();

    console.log(finalResult);
}

upperCase('Hi, how are you?');
upperCase('hello');
upperCase('');
