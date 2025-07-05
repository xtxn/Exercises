async function getInfo() {
    const input = document.getElementById('stopId');
    const stopID = input.value;
    const stopNameField = document.getElementById('stopName');
    let busesField = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    input.value = '';
    busesField.innerHTML = '';

    if (!stopID) {
        return;
    }

    try {
        const res = await fetch(url)
        const data = await res.json();
        stopNameField.textContent = data.name;

        if (!data.name || !res.ok) {
            throw new Error;
        }

        Object.entries(data.buses).map(bus => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
            busesField.appendChild(li);
        })

    } catch (error) {
        stopNameField.textContent = 'Error';
    };
}