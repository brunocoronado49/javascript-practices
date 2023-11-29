function numberInverted(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log(numberInverted(321));

