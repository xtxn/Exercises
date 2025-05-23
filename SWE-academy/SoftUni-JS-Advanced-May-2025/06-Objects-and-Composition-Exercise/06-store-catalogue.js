function storeCatalogue(arr) {
    let catalogue = {};
    for (const item of arr) {
        let [product, price] = item.split(' : ');
        price = Number(price);
        catalogue[product] = price;
    };

    let sortable = Object.entries(catalogue);
    sortable.sort((a, b) => a[0].localeCompare(b[0]))

    let letter = '';
    for (const el of sortable) {
        if (el[0][0] != letter) {
            console.log(el[0][0]);
            letter = el[0][0];
        }
        console.log(el.join(': '));
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);