import { v4 as uuidv4 } from 'uuid';

import http from 'http';
import fs from 'fs/promises'
import { log } from 'console';

const server = http.createServer(async (req, res) => {

    const location = req.url;

    // Load CSS
    if (location === '/styles/site.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        const html = await fs.readFile(`./src/content/styles/site.css`);
        res.write(html.toString());
        res.end();

        // Load Home Page
    } else if (location === '/') {
        const cats = await getAllCats();
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(await displayAllCats(cats));
        res.end();

        // Add Cat
    } else if (location === '/cats/add-cat') {
        if (req.method === "GET") {
            const templateHtml = await fs.readFile('./src/views/addCat.html', 'utf8');
            const breeds = await getAllBreeds();;

            const breedsTemplate = breeds.map(breed =>
                `<option value="${breed}">${breed}</option>`
            ).join('\n');

            const finalHtml = templateHtml.replace('{{breeds}}', breedsTemplate);

            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(finalHtml);
            res.end();

        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const formData = new URLSearchParams(body);
                const currentCat = Object.fromEntries(formData);
                const newCat = {
                    id: uuidv4(),
                    ...currentCat
                }

                addCat(newCat);
                res.writeHead(302, { 'Location': '/' });
                res.end();
            })
        }
        // Add breed
    } else if (location === '/cats/add-breed') {

        if (req.method === 'GET') {
            const templateHtml = await fs.readFile('./src/views/addBreed.html', 'utf8');
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(templateHtml)
            res.end();

        } else if (req.method === 'POST') {

            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', (async () => {
                const formData = new URLSearchParams(body);
                const breedName = formData.get('breed');

                if (breedName) {
                    await addBreed(breedName);
                }

                res.writeHead(302, { 'Location': '/' })
                res.end();
            }))
        }
    }
});

server.listen('3000', () => {
    console.log('Server started at http://localhost:3000');
});

async function getAllBreeds() {
    const breedData = await fs.readFile('./src/dbBreeds.json');
    const breedArr = JSON.parse(breedData);
    return breedArr;
}

async function addBreed(breed) {
    const breeds = await getAllBreeds();
    breeds.push(breed);
    await fs.writeFile('./src/dbBreeds.json', JSON.stringify(breeds), 'utf8');
}

async function getAllCats() {
    const catsData = await fs.readFile('./src/dbCats.json', 'utf8');
    return JSON.parse(catsData);
}

async function displayAllCats(cats) {
    const templateHtml = await fs.readFile('./src/views/index.html', 'utf8');
    // const cats = await getAllCats();

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

    return templateHtml.replace('{{cats}}', catCards);
}

async function addCat(newCat) {
    const allCats = await getAllCats();
    allCats.push(newCat);

    await fs.writeFile('./src/dbCats.json', JSON.stringify(allCats, null, 2), 'utf8')
};


