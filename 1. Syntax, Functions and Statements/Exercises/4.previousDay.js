function previousDay(year, month, day) {

    let newDate = new Date(year, month - 1, day - 1);
    let currentYear = newDate.getFullYear();
    let currentMonth = newDate.getMonth() + 1;
    let prevDay = newDate.getDate();

    console.log(`${currentYear}-${currentMonth}-${prevDay}`);

}
previousDay(2016, 9, 30)
previousDay(2016, 5, 1)
