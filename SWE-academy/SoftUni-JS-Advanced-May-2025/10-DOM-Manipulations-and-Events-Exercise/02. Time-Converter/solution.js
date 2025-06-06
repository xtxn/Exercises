function attachEventsListeners() {
    const getAllBtns = document.querySelectorAll('input[type=button]');
    console.log(getAllBtns);

    for (const btn of getAllBtns) {
        btn.addEventListener('click', (e) => {
            const input = e.currentTarget.previousElementSibling;
            const currentValue = input.value;
            const currentUnit = input.id;

            switch (currentUnit) {
                case 'days': calculateValue(input.value); break;
                case 'hours': calculateValue(input.value / 24); break;
                case 'minutes': calculateValue(input.value / 24 / 60); break;
                case 'seconds': calculateValue(input.value / 24 / 60 / 60); break;
            };
        });
    }
    function calculateValue(days) {
        const inputs = document.querySelectorAll('input[type=text]');

        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}