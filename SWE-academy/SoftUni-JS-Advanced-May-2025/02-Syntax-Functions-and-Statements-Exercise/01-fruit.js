function moneyNeeded(fruit, weight, pricePerKg) {
    const weightInKg = weight / 1000;
    const cost = weightInKg * pricePerKg;

    console.log(`I need $${cost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}

moneyNeeded('orange', 2500, 1.80);
moneyNeeded('apple', 1563, 2.35);