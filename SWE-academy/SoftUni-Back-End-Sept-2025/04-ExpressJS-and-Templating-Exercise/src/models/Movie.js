import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);

export default class Movie {
    static find() {
        return db.movies.slice();
    }
    async save() {
        db.movies.push(this);
        const dbWrite = JSON.stringify(db, null, 2);
        await fs.writeFile('./src/db.json', dbWrite);
        return this;
    }
}
