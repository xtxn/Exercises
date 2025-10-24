import express from 'express';

const app = express();

// Add static middleware
app.use(express.static('src/public'));

// Add body parser
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('it works')
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.end();
})

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));