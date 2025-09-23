import express from 'express';
import handlebars from 'express-handlebars';

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

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about')
})

// Start server
app.listen(port, () => console.log('Server is listening on http://localhost:3000'));