function score(playerOne, playerTwo) {
    let p1Score = 0;
    let p2Score = 0;

    if(playerOne.length === playerTwo.length) {
        for (let i = 0; i < playerOne.length; i++) {
            if(playerOne[i] > playerTwo[i]) {
                p1Score++;
            } else if(playerOne[i] < playerTwo[i]) {
                p2Score++;
            }
        }
    } else {
        console.log('Array length not the same.');
    }

    return `The score is: Alice ${p1Score} - Bob ${p2Score}`;
}

const alice = [1, 2, 3];
const bob = [3, 2, 1];
console.log(score(alice, bob))

