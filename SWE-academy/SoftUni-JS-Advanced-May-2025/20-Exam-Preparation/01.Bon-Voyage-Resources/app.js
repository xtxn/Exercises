window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const btnNext = document.getElementById('next-btn');
    const infoList = document.getElementsByClassName('info-list')[0];
    const confirmList = document.querySelector('ul.confirm-list');
    const status = document.getElementById('status');

    btnNext.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();

        status.classList.remove('vacation-confirmed');
        status.classList.remove('vacation-cancelled');
        status.textContent = '';
        status.textContent = '';

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const fromDate = fromDateInput.value;
        const toDate = toDateInput.value

        const tempData = {
            firstName: firstName,
            lastName: lastName,
            fromDate: fromDate,
            toDate: toDate,
        }

        const fromDay = fromDate.split('-')[2];
        const toDay = toDate.split('-')[2];

        let li = document.createElement('li');
        li.classList.add('vacation-content');
        let article = document.createElement('article');

        if (!firstName || !lastName || !fromDate || !toDate || new Date(fromDateInput.value) >= new Date(toDateInput.value)) {
            return;
        };

        let nameH3 = document.createElement('h3');
        nameH3.textContent = `Name: ${firstName} ${lastName}`;
        let fromDateP = document.createElement('p');
        fromDateP.textContent = `From date: ${fromDate}`;
        let toDateP = document.createElement('p');
        toDateP.textContent = `To date: ${toDate}`;
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn')
        editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn')
        continueBtn.textContent = 'Continue';

        article.appendChild(nameH3);
        article.appendChild(fromDateP);
        article.appendChild(toDateP);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        infoList.appendChild(li);
        btnNext.disabled = true;

        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();

            firstNameInput.value = tempData.firstName;
            lastNameInput.value = tempData.lastName;
            fromDateInput.value = tempData.fromDate;
            toDateInput.value = tempData.toDate;

            infoList.removeChild(li);
            btnNext.disabled = false;
        });

        const confirmBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm'

            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel'

            li.replaceChild(confirmBtn, editBtn);
            li.replaceChild(cancelBtn, continueBtn);
            confirmList.appendChild(li);
        });

        confirmBtn.addEventListener('click', finish);
        cancelBtn.addEventListener('click', finish);

        function finish(e) {
            btnNext.disabled = false;
            confirmList.removeChild((li));

            if (e.target == confirmBtn) {
                status.classList.add('vacation-confirmed');
                status.textContent = 'Vacation Requested';
            } else if (e.target == cancelBtn) {
                status.classList.add('vacation-cancelled');
                status.textContent = 'Cancelled Vacation';
            };
        };
    };
}

