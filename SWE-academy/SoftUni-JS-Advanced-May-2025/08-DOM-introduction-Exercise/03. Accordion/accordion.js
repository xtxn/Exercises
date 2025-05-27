function toggle() {
    let btn = document.querySelector('.button')
    let hidden = document.getElementById('extra');
    if (hidden.style.display == 'none') {
        hidden.style.display = 'block';
        btn.textContent = 'Less';
    } else if (hidden.style.display != 'none') {
        hidden.style.display = 'none';
        btn.textContent = 'More';
    }
}