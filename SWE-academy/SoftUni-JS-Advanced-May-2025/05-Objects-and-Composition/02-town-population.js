function townPopulation(cities) {
    let registry = {};
    for (const current of cities) {

        let [city, population] = current.split(' <-> ');
        population = Number(population);

        if (registry.hasOwnProperty(city) == false) {
            registry[city] = 0;
        }
        registry[city] += population;
    }
    for (const key of Object.keys(registry)) {
        console.log(`${key} : ${registry[key]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);