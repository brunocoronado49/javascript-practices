function sameVocal(word) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const firstVocal = word[0];
    const lastVocal = word[word.length - 1];

    if((vocals.includes(firstVocal) &&
        vocals.includes(lastVocal)) &&
        (firstVocal === lastVocal)) {
            return true;
    }
    return false;
}

const word1 = 'ana';
const word2 = 'mario';
console.log(sameVocal(word1));
console.log(sameVocal(word2));



