function numberInverted(number) {
    let result = '';
    for(let i = number.length -1; i >=0; i--) {
        result += number[i];
    }

    return parseInt(result);
}

console.log(numberInverted('321'));
console.log(numberInverted('675'));
