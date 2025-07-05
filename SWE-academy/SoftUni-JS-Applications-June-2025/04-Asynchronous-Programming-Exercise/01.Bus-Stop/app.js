async function getInfo() {
    const input = document.getElementById('stopId');
    const stopID = input.value;
    const stopNameField = document.getElementById('stopName');
    let busesField = document.getElementById('buses');


    input.value = '';
    stopNameField.innerHTML = '';
    busesField.innerHTML = '';

    if (!stopID) {
        return;
    }

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error;
        }
        const data = await res.json();
        stopNameField.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
            busesField.appendChild(li);
        });

    } catch (error) {
        stopNameField.textContent = 'Error';
    };
}