function factory(library, orders) {

    let list = [];

    for (let i = 0; i < orders.length; i++) {

        list.push(orders[i].template);

        for (const el of orders[i].parts) {
            list[i][el] = library[el]
        }
    }
    return list;
}

//Task input
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
    {
        template: { name: 'ACME Printer' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);

