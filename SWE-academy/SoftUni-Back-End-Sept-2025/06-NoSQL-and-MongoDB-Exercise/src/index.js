import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import { routes } from './routes.js';

const app = express();
const port = 3000;

//Setup Database
const urlDb = 'mongodb://localhost:27017/';
try {
    await mongoose.connect(urlDb, {
        dbName: 'movie-magic-sept-2025',
    });
    console.log('Successfully connected to DB!')
} catch (error) {
    console.error('Cannot connect to DB', error.message);
}

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
}));
app.set('view engine', 'hbs');

app.set('views', 'src/views');

// Setup middlewares
app.use(express.static('src/public'));
app.use(express.urlencoded()); // Formdata parser from /create

// Routes
app.use(routes)

// Start server
app.listen(port, () => console.log('Server is listening on http://localhost:3000'));