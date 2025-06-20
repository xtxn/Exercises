class ShadyCarDealership {

    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    };

    addCar(model, year, mileage, price) {
        if (model === '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        };
        this.availableCars.push({ model, year, mileage, price });
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredYear) {
        let foundCar = this.availableCars.find(a => a.model === model);
        let soldPrice = foundCar.price;

        if (!foundCar) {
            return `${model} was not found!`
        };
        if (foundCar.year >= desiredYear) {
        } else if (foundCar.year < desiredYear && desiredYear - foundCar.year <= 5) {
            soldPrice = foundCar.price * 0.90;
        } else if (foundCar.year < desiredYear && desiredYear - foundCar.year > 5) {
            soldPrice = foundCar.price * 0.80;
        };

        this.soldCars.push({ model: foundCar.model, year: foundCar.year, mileage: foundCar.mileage, soldPrice });
        this.availableCars = this.availableCars.filter(car => car.model !== model);
        this.revenue += soldPrice;

        return `${foundCar.model} (${foundCar.year}) was sold for ${soldPrice.toFixed(2)}$`
    }

    prepareCarForSale(model) {
        let foundCar = this.availableCars.find(a => a.model === model);

        if (!foundCar) {
            return `${model} was not found for preparation!`
        };

        foundCar.mileage *= 0.50;
        foundCar.price *= 1.3;
        return `${model} (${foundCar.year}) is prepared for sale with ${foundCar.mileage} km. - ${foundCar.price.toFixed(2)}$`
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        };
        if (criteria === 'year') {
            this.soldCars.sort((a, b) => b.year - a.year);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        };

        let result = [`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`];
        result.push(`${this.soldCars.length} cars sold:`);

        for (const car of this.soldCars) {
            result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`);
        }
        return result.join('\n');
    }
}

// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));

// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('Honda Jazz'));

// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.sellCar('Toyota Yaris', 2012));

const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));