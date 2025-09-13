import { v4 as uuidv4 } from 'uuid';

import http from 'http';
import fs from 'fs/promises'

const server = http.createServer(async (req, res) => {

    const location = req.url;

    // Home Page
    if (location === '/') {
        const templateHtml = await fs.readFile('./src/views/index.html', 'utf8');
        const catsData = await fs.readFile('./src/dbCats.json', 'utf8');
        const cats = JSON.parse(catsData)

        const catCards = cats.map(cat => `
             <li>
                    <img src="${cat.imageUrl}" alt="Black Cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
            `).join('\n');

        const finalHtml = templateHtml.replace('{{cats}}', catCards);

        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(finalHtml);
    }

    // Add Cat
    if (location === '/cats/add-cat') {
        const templateHtml = await fs.readFile('./src/views/addCat.html', 'utf8');
        const breedData = await fs.readFile('./src/dbBreeds.json');
        const breeds = JSON.parse(breedData);

        const breedsTemplate = breeds.map(breed =>
            `<option value="${breed}">${breed}</option>`
        ).join('\n');

        const finalHtml = templateHtml.replace('{{breeds}}', breedsTemplate);

        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(finalHtml)
    }

    if (location === '/styles/site.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        const html = await fs.readFile(`./src/content/styles/site.css`);
        res.write(html.toString())
    }
    res.end();
});

server.listen('3000', () => {
    console.log('Server started at http://localhost:3000');
});

async function addBreed() {

}
