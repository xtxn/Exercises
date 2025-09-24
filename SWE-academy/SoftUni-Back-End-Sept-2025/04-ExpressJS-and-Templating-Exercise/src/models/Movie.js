import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);

export default class Movie {
    constructor(data) {
        Object.assign(this, data)
        this._id = uuidv4();
    }

    static find() {

        return db.movies.slice();
    }

    static findOne(movieId) {
        let result;
        if (movieId) {
            result = db.movies.find(movie => movie._id === movieId);
        }
        return result;
    }

    async save() {
        db.movies.push(this);
        const dbWrite = JSON.stringify(db, null, 2);
        await fs.writeFile('./src/db.json', dbWrite);
        return this;
    }
}
