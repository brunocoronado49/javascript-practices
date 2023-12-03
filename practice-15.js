function wordCounter(quote) {
    let quoteSplit = quote
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .toLowerCase()
        .split(' ');
    
    const wordsCounter = {};
    quoteSplit.forEach(word => {
        if(word !== '') {
            wordsCounter[word] = (wordsCounter[word] || 0) + 1;

        }
    });

    console.log('Final countdown words:');
    for(const word in wordsCounter) {
        console.log(`${word}: ${wordsCounter[word]}`);
    }
}

const quote = 'Hola buenas tardes hola buenas como estas hola';
wordCounter(quote);
