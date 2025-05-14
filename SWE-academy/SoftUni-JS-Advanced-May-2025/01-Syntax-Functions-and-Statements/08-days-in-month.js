function daysOfMonth(day, year) {
    // use Date();
    console.log(new Date(year, day, 0).getDate());

}

daysOfMonth(1, 2012);
daysOfMonth(2, 2021);