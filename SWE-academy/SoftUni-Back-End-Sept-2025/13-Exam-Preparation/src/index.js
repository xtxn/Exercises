import express from 'express';
import routes from './routes.js';

const app = express();

// Add static middleware
app.use(express.static('src/public'));

// Add body parser
app.use(express.urlencoded());

// Add routes
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));