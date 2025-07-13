async function students() {
    const result = document.querySelector('#results tbody');
    const btnSubmit = document.getElementById('submit');
    const inputFirstName = document.querySelector('input[name="firstName"]');
    const inputLastName = document.querySelector('input[name="lastName"]');
    const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]');
    const inputGrade = document.querySelector('input[name="grade"]');

    const url = 'http://localhost:3030/jsonstore/collections/students';

    await onLoad();

    btnSubmit.addEventListener('click', onSubmit);

    async function onLoad() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error;
            };

            const data = await response.json();

            result.innerHTML = '';
            Object.values(data).forEach(student => {
                result.appendChild(addStudent(student));
            });

        } catch (error) {
            console.log(error.message);
        };
    };

    async function onSubmit(e) {
        e.preventDefault();

        const firstName = inputFirstName.value;
        const lastName = inputLastName.value;
        const facultyNumber = inputFacultyNumber.value;
        const grade = inputGrade.value;

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        };

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(student),
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error;
            };

            inputFirstName.value = '';
            inputLastName.value = '';
            inputFacultyNumber.value = '';
            inputGrade.value = '';

        } catch (error) {
            console.log(error.message);

        };
        await onLoad();
    };

    function addStudent(student) {
        const tr = document.createElement('tr');
        const fnTd = document.createElement('td');
        fnTd.textContent = student.firstName;
        const lnTd = document.createElement('td');
        lnTd.textContent = student.lastName;
        const facnTd = document.createElement('td');
        facnTd.textContent = student.facultyNumber;
        const gTd = document.createElement('td');
        gTd.textContent = student.grade;
        tr.appendChild(fnTd);
        tr.appendChild(lnTd);
        tr.appendChild(facnTd);
        tr.appendChild(gTd);
        return tr;
    };
}

students();