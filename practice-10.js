function primeNumber(len) {
    if(len <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(len); i++) {
        if(len % i == 0) {
            return false;
        }
    }

    return true;
}

function main(num) {
    for (let i = 0; i < num; i++) {
        if(primeNumber(i)) {
            console.log(`${i} is a prime number`);
        }
    }
}

main(100);

