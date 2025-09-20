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

// Routes
app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

// Start server
app.listen(port, () => console.log('Server is listening on http://localhost:3000'));