function carFactory(obj) {
    let car = {
        model: obj.model,
    }

    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }

    if (obj.power <= 90) {
        car.engine = engine.small;
    } else if (obj.power <= 120) {
        car.engine = engine.normal;
    } else {
        car.engine = engine.monster;
    }

    car.carriage = {
        type: obj.carriage,
        color: obj.color,
    }

    if (obj.wheelsize % 2 == 0) {
        car.wheels = Array(4).fill(obj.wheelsize - 1);
    } else {
        car.wheels = Array(4).fill(obj.wheelsize);
    }

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});