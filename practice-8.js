function isAnagram(wordOne, wordTwo) {
    if(wordOne === wordTwo) return false;
    if(wordOne.length != wordTwo.length) return false;

    let wordsOnes = wordOne.split('').sort();
    let wordsTwos = wordTwo.split('').sort();
    
    if(wordsOnes.toString() === wordsTwos.toString()) {
        return true;
    }
    return false;
}

console.log(isAnagram('amor', 'roma'));
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('perro', 'gato'));

