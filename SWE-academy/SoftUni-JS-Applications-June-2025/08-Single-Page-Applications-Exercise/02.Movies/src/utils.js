
const main = document.querySelector('#main');

function hideAll() {
    Array.from(main.children).forEach((el) => (el.style.display = 'none'));
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

