window.addEventListener("load", solve);

function solve() {
  const colorInput = document.getElementById('colors');
  const modelInput = document.getElementById('motorcycles');
  const dateTimeInput = document.getElementById('datetime');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const btnTestRide = document.getElementById('test-ride-btn');
  const previewList = document.getElementById('preview-list');
  const completeList = document.getElementById('complete-list');
  const dataView = document.querySelector('.data-view');

  btnTestRide.addEventListener('click', testRide);

  function testRide(e) {
    let valueLi = document.createElement('li');
    let valueArticle = document.createElement('article');
    let valueDiv = document.createElement('div');
    let btnEdit = document.createElement('button');
    let btnNext = document.createElement('button');
    let btnComplete = document.createElement('button');

    const color = colorInput.value;
    const model = modelInput.value;
    const fullName = nameInput.value;
    const email = emailInput.value;
    const date = dateTimeInput.value;

    let tempData = {
      Color: color,
      Model: model,
      For: fullName,
      Contact: email,
      'Test Ride On': date,
    };

    if (color === '' ||
      model === '' ||
      fullName === '' ||
      email === '' ||
      date === '') {
      return;
    };

    let colorP = document.createElement('p');
    colorP.textContent = `Color: ${color}`;
    let modelP = document.createElement('p');
    modelP.textContent = `Model: ${model}`;
    let nameP = document.createElement('p');
    nameP.textContent = `For: ${fullName}`;
    let emailP = document.createElement('p');
    emailP.textContent = `Contact: ${email}`;
    let dateP = document.createElement('p');
    dateP.textContent = `Test Ride On: ${date}`;
    valueArticle.appendChild(colorP);
    valueArticle.appendChild(modelP);
    valueArticle.appendChild(nameP);
    valueArticle.appendChild(emailP);
    valueArticle.appendChild(dateP);

    valueDiv.classList.add('btn-container');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit';
    btnNext.classList.add('next-btn');
    btnNext.textContent = 'Next';
    valueDiv.appendChild(btnEdit);
    valueDiv.appendChild(btnNext);
    valueLi.appendChild(valueArticle);
    valueLi.appendChild(valueDiv);
    previewList.appendChild(valueLi);

    btnTestRide.disabled = true;

    colorInput.value = '';
    modelInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    dateTimeInput.value = '';

    btnEdit.addEventListener('click', edit);
    btnNext.addEventListener('click', next);
    btnComplete.addEventListener('click', complete);

    function edit() {
      btnTestRide.disabled = false;

      colorInput.value = tempData.Color;
      modelInput.value = tempData.Model;
      nameInput.value = fullName;
      emailInput.value = email;
      dateTimeInput.value = date;
      previewList.removeChild(valueLi);
    };

    function next() {
      valueLi.removeChild(valueDiv)
      completeList.appendChild(valueLi);

      btnComplete.classList.add('complete-btn');
      btnComplete.textContent = 'Complete';
      valueLi.appendChild(btnComplete);
    };

    let btnConfirm = document.createElement('button');
    function complete() {
      completeList.removeChild(valueLi);
      btnConfirm.classList.add('confirm-btn');
      btnConfirm.textContent = 'Your Test Ride is Confirmed';
      dataView.appendChild(btnConfirm);
    };

    btnConfirm.addEventListener('click', () => {
      window.location.reload();
    })
  };
}