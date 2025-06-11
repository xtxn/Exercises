window.addEventListener("load", solve);

function solve() {
    //select input fields
    let purchaseBtn = document.getElementById('purchase-btn');
    let preview = document.getElementById('ticket-preview');
    let purchase = document.getElementById('ticket-purchase');
    let bottom = document.querySelector('.bottom-content');

    purchaseBtn.addEventListener('click', (onClick));

    //on click functionality
    function onClick(e) {
        e.preventDefault();
        const inputData = {
            Count: document.getElementById('num-tickets'),
            Preference: document.getElementById('seating-preference'),
            To: document.getElementById('full-name'),
            Email: document.getElementById('email'),
            'Phone Number': document.getElementById('phone-number'),
        };
        //store input entries
        let count = inputData.Count.value;
        let pref = inputData.Preference.value;
        let to = inputData.To.value;
        let email = inputData.Email.value;
        let phone = inputData['Phone Number'].value;

        //Check for empty input fields
        for (const element of Object.values(inputData)) {
            if (element.value == '' || element.value == 'seating-preference') {
                return;
            };
        };

        //create and append the information from input
        const article = document.createElement('article');
        const li = document.createElement('li');
        li.classList.add('ticket-purchase')

        for (const key of Object.keys(inputData)) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${inputData[key].value}`
            article.appendChild(p);
        };
        li.appendChild(article);
        preview.appendChild(li);

        //adding edit and next buttons
        const div = document.createElement('div');
        div.classList.add('btn-container');

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit-btn');
        btnEdit.textContent = 'Edit';

        const btnNext = document.createElement('button');
        btnNext.classList.add('next-btn');
        btnNext.textContent = 'Next';

        div.appendChild(btnEdit);
        div.appendChild(btnNext);
        li.appendChild(div);

        //resetting all input values
        for (const key of Object.keys(inputData)) {
            if (key == 'Preference') {
                inputData.Preference.selectedIndex = 0;
            }
            inputData[key].value = '';
        };
        purchaseBtn.disabled = true;

        //Edit and Next functionality
        btnEdit.addEventListener('click', () => {
            inputData.Count.value = count;
            inputData.Preference.value = pref;
            inputData.To.value = to;
            inputData.Email.value = email;
            inputData['Phone Number'].value = phone;

            li.remove();
            purchaseBtn.disabled = false;
        });

        btnNext.addEventListener('click', () => {
            div.remove();

            let btnBuy = document.createElement('button');
            btnBuy.classList.add('buy-btn');
            btnBuy.textContent = 'Buy';

            article.appendChild(btnBuy);
            purchase.appendChild(li);

            //purchase done
            btnBuy.addEventListener('click', () => {
                li.remove();

                let h2 = document.createElement('h2');
                h2.textContent = 'Thank you for your purchase!'

                let btnBack = document.createElement('button');
                btnBack.classList.add('back-btn');
                btnBack.textContent = 'Back';

                bottom.appendChild(h2);
                bottom.appendChild(btnBack);

                btnBack.addEventListener('click', () => {
                    window.location.reload();
                });
            });
        });
    };
}
