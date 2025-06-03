function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    let result = [];
    let counter = 0;
    let [key, value] = criteria.split('-');

    for (const employee of employees) {
        const firstName = employee.first_name;
        const lastName = employee.last_name;
        const email = employee.email;

        if (criteria == 'all') {
            result.push(`${counter}. ${firstName} ${lastName} - ${email}`);
            counter++;
        } else if (employee[key] == value) {
            result.push(`${counter}. ${firstName} ${lastName} - ${email}`);
            counter++;
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    }
}


filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');