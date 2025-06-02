function attachGradientEvents() {
    let result = document.getElementById('result');

    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', (event) => {
        result.textContent = `${Math.floor(event.offsetX / gradient.clientWidth * 100)}%`;

    })
}