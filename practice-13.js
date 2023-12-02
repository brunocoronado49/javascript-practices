function calculateFood(priceOne, priceTwo) {
    return priceOne + priceTwo;
}

function calculateDrink(priceOne, priceTwo) {
    return priceOne + priceTwo;
}

function calculateTotal(food, drink) {
    return food + drink;
}

const totalFood = calculateFood(2800, 1300);
const totalDrink = calculateDrink(900, 650);
console.log(`Price total food: ${totalFood}`);
console.log(`Price total drinks: ${totalDrink}`);
console.log(`Total: ${calculateTotal(totalFood, totalDrink)}`);

