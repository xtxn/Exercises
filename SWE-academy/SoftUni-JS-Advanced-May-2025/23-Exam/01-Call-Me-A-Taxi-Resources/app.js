window.addEventListener('load', solve);

function solve() {

    const pickUpInput = document.getElementById('pick-up-location');
    const dropOffInput = document.getElementById('drop-off-location');
    const passangerCountInput = document.getElementById('number-of-passengers');
    const dateTimeInput = document.getElementById('date-time');
    const taxiTypeInput = document.getElementById('taxi-type');

    const btnOrder = document.getElementById('order-btn');

    const orderInfoList = document.querySelector('.order-info-list');
    const confirmOrderList = document.querySelector('.confirm-order-list');
    const status = document.getElementById('status')

    btnOrder.addEventListener('click', onOrderClick);

    let tempData = {};

    function onOrderClick(e) {
        e.preventDefault();

        let pickupLocation = pickUpInput.value;
        let dropoffLocation = dropOffInput.value;
        let passangers = passangerCountInput.value;
        let dateTime = dateTimeInput.value;
        let taxiType = taxiTypeInput.value;

        if (!pickupLocation || !dropoffLocation || !passangers || !dateTime || !taxiType) {
            return;
        }

        let liInfo = document.createElement('li');
        liInfo.classList.add('order-content');
        let article = document.createElement('article');
        let h3Pickup = document.createElement('h3');
        h3Pickup.textContent = `Pick From: ${pickupLocation}`
        let h3Droppoff = document.createElement('h3');
        h3Droppoff.textContent = `Drop-off: ${dropoffLocation}`
        let pPassangers = document.createElement('p');
        pPassangers.textContent = `Passangers: ${passangers}`
        let pTime = document.createElement('p');
        pTime.textContent = `Time: ${dateTime}`
        let pTaxiType = document.createElement('p');
        pTaxiType.textContent = `Type: ${taxiType}`;

        article.appendChild(h3Pickup);
        article.appendChild(h3Droppoff);
        article.appendChild(pPassangers);
        article.appendChild(pTime);
        article.appendChild(pTaxiType);

        liInfo.appendChild(article)

        let divBtn = document.createElement('div');
        divBtn.classList.add('btn-wrapper')
        let btnEdit = document.createElement('button');

        btnEdit.classList.add('edit-btn');
        btnEdit.textContent = 'Edit';

        let btnContinue = document.createElement('button');
        btnContinue.classList.add('continue-btn');
        btnContinue.textContent = 'Continue';

        divBtn.appendChild(btnEdit);
        divBtn.appendChild(btnContinue);
        liInfo.appendChild(divBtn);

        orderInfoList.appendChild(liInfo);

        tempData.pickupLocation = pickupLocation;
        tempData.dropoffLocation = dropoffLocation;
        tempData.passangers = passangers;
        tempData.dateTime = dateTime;
        tempData.taxiType = taxiType;

        pickUpInput.value = '';
        dropOffInput.value = '';
        passangerCountInput.value = '';
        dateTimeInput.value = '';
        taxiTypeInput.value = '';

        btnOrder.disabled = true;

        btnEdit.addEventListener('click', onEdit);
        btnContinue.addEventListener('click', onContinue);
    };

    function onEdit(e) {
        e.preventDefault();

        pickUpInput.value = tempData.pickupLocation;
        dropOffInput.value = tempData.dropoffLocation;
        passangerCountInput.value = tempData.passangers;
        dateTimeInput.value = tempData.dateTime;
        taxiTypeInput.value = tempData.taxiType;

        btnOrder.disabled = false;

        let liInfo = orderInfoList.firstChild;
        orderInfoList.removeChild(liInfo);
    };

    function onContinue(e) {
        e.preventDefault();

        let liInfo = orderInfoList.firstChild;
        let btnWrapper = document.querySelector('.btn-wrapper');

        let btnCancel = document.createElement('button');
        btnCancel.classList.add('cancel-btn');
        btnCancel.textContent = 'Cancel';
        let btnConfirm = document.createElement('button');
        btnConfirm.classList.add('confirm-btn');
        btnConfirm.textContent = 'Confirm';
        let newBtns = [btnCancel, btnConfirm]

        btnWrapper.replaceChildren(...newBtns);
        confirmOrderList.appendChild(liInfo);

        btnCancel.addEventListener('click', onCancel);
        btnConfirm.addEventListener('click', onConfirm);
    };

    function onCancel(e) {
        e.preventDefault();
        let liInfo = confirmOrderList.firstChild;
        confirmOrderList.removeChild(liInfo)
        status.classList.add('taxi-not-complete');
        status.textContent = ('Taxi request was not completed.')

        btnOrder.disabled = true;

        status.addEventListener('click', () => { window.location.reload() });
    };

    function onConfirm(e) {
        e.preventDefault();
        let liInfo = confirmOrderList.firstChild;
        confirmOrderList.removeChild(liInfo)
        status.classList.add('taxi-ordered');
        status.textContent = ('Taxi has been successfully ordered.')

        btnOrder.disabled = true;

        status.addEventListener('click', () => { window.location.reload() });
    };
}





