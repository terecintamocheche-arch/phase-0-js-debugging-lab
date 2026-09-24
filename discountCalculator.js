function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 1; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;

function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;

    let totalPrice = 0;

    for (let i = 0; i < quantity; i++) {
        debugger;
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        debugger;
        totalPrice *= 0.9;
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;