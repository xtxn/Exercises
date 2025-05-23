function townToJSON(arr) {
    let towns = [];

    let columns = arr.shift().split('|');
    let [, col1, col2, col3,] = columns;
    col1 = col1.trim();
    col2 = col2.trim();
    col3 = col3.trim();

    for (const el of arr) {
        let [, town, latitude, longitude,] = el.split('|');
        town = town.trim();
        latitude = latitude.trim();
        longitude = longitude.trim();
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        towns.push({
            [col1]: town,
            [col2]: latitude,
            [col3]: longitude,
        });
    }
    return JSON.stringify(towns)
}


townToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])