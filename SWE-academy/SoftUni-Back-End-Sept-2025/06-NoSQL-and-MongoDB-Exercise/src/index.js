import express from 'express';
import handlebars from 'express-handlebars';
import { routes } from './routes.js';


const app = express();
const port = 3000;

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
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