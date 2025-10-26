import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

// Config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views')

// Setup database
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'myths-and-legends',
    });

    console.log('Database connected successfully');

} catch (error) {
    console.error('Cannot connect to database: ', error.message);
}

// Add static middleware
app.use(express.static('src/public'));

// Add cookie parser
app.use(cookieParser())

// Add body parser
app.use(express.urlencoded());

// Use auth middleware
app.use(authMiddleware)

// Add routes
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));