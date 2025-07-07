function solve() {
    const btnDepart = document.getElementById('depart');
    const btnArrive = document.getElementById('arrive');
    let stopBoard = document.querySelector('.info');

    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/'

    let currentStop = 'depot';
    let arrivingAtStop = '';

    let stop = {
        name: '',
        next: 'depot',
    }

    async function depart() {
        try {
            btnDepart.disabled = true;
            btnArrive.disabled = false;

            let response = await fetch(baseURL + stop.next);

            if (!response.ok) {
                throw new Error;
            }

            let data = await response.json();
            stop = data;

            stopBoard.textContent = `Next stop ${stop.name}`

        } catch (error) {
            btnDepart.disabled = true;
            btnArrive.disabled = true;
            stopBoard.textContent = `Error`;
        }
    };

    function arrive() {
        btnDepart.disabled = false;
        btnArrive.disabled = true;
        stopBoard.textContent = `Arriving at ${stop.name}`;
    };

    return {
        depart,
        arrive
    };
}

let result = solve();