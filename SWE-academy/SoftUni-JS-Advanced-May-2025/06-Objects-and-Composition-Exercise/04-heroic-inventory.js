function heroicInventory(heroArr) {
    let heroRegister = [];

    for (const hero of heroArr) {
        if (hero == false) {
            continue;
        }
        let [name, level, allItems] = hero.split(' / ');
        level = Number(level);

        items = allItems ? allItems.split(', ') : [];

        heroRegister.push({
            name: name,
            level: level,
            items: items,
        });
    };
    return JSON.stringify(heroRegister);
}

heroicInventory([''])
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);