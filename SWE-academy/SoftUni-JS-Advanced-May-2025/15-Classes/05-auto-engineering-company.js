function carMaker(arr) {

    const carRegister = new Map();

    for (const entry of arr) {

        const [brand, model, count] = entry.split(' | ');
        const producedCars = Number(count);

        if (!carRegister.has(brand)) {
            carRegister.set(brand, new Map());
        }

        const modelsMap = carRegister.get(brand);

        if (modelsMap.has(model)) {
            modelsMap.set(model, modelsMap.get(model) + producedCars);
        } else {
            modelsMap.set(model, producedCars);
        }
    }

    for (const [carBrand, modelsMap] of carRegister) {
        console.log(carBrand);

        for (const [carModel, producedCars] of modelsMap) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
};

carMaker([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])