class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }
    addBikes(bikes) {
        const addedBikes = [];

        for (const bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);

            const index = this.availableBikes.findIndex(a => a.brand === brand);

            if (index !== -1) {
                this.availableBikes[index].quantity += quantity;
                if (this.availableBikes[index].price < price) {
                    this.availableBikes[index].price = price;
                }
            } else {
                this.availableBikes.push({ brand, quantity, price });
                addedBikes.push(brand);
            };
        };
        // this.availableBikes.forEach(a => addedBikes.push(a.brand));

        // return `Successfully added ${addedBikes.join(', ')}`;
        return `Successfully added ${[...new Set(addedBikes)].join(', ')}`;
    };

    rentBikes(selectedBikes) {
        let totalPrice = 0;

        for (const bike of selectedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity)

            let foundBike = this.availableBikes.find(a => a.brand === brand);

            if (!foundBike || foundBike.quantity < quantity) {
                return `Some of the bikes are unavailable or low on quantity in the bike rental service.`
            } else {
                totalPrice += foundBike.price * quantity;
                foundBike.quantity -= quantity;
            }
        }
        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    };

    returnBikes(returnedBikes) {
        for (const bike of returnedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);

            let foundBike = this.availableBikes.find(a => a.brand === brand);

            if (!foundBike) {
                return `Some of the returned bikes are not from our selection.`
            } else {
                foundBike.quantity += quantity;
            }
        }
        return `Thank you for returning!`;
    };

    revision() {
        let result = ['Available bikes:'];

        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

        for (const bike of sortedBikes) {
            result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`)

        };

        result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

        return result.join('\n');
    };
}

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());

const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());

// let Rental = new BikeRentalService("MyBikes", "CityCenter");
// console.log(Rental.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]))
// console.log(Rental.rentBikes(["Mountain Bike-2", "City Bike-5"]));
// console.log(Rental.returnBikes(["Mountain Bike-2", "City Bike-3"]));
// console.log(Rental.revision());