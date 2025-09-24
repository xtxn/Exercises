import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);

export default class Movie {
    constructor(data) {
        this.data = data;
    }

    static find() {
        return db.movies.slice();
    }
    async save() {
        db.movies.push(this.data);
        const dbWrite = JSON.stringify(db, null, 2);
        await fs.writeFile('./src/db.json', dbWrite);
        return this;
    }
}
