function solve() {
    let heroes = {
        fighter(name) {
            const hero = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${name} slashes at the foe!`);
                }
            }
            return hero;
        },
        mage(name) {
            const hero = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${name} cast ${spell}`);
                }
            }
            return hero;
        },
    }
    return heroes;
}


let create = solve();
const scorcher = create.mage("Scorcher");


scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);