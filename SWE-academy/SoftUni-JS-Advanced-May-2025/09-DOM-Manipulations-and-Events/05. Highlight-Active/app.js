function focused() {
    const elements = document.querySelectorAll('div > div');

    for (const el of elements) {
        focus(el);
    }

    function focus(focusedEl) {
        let input = focusedEl.querySelector('input');

        input.addEventListener('focus', (e) => {
            focusedEl.className = 'focused';

        });
        input.addEventListener('blur', (e) => {
            focusedEl.className = '';
        });
    }
}