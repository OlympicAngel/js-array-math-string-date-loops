function is_date(date) {
    alert(date instanceof Date)
}

function curday() {
    let char = prompt("insert separator:")
    const d = new Date();
    alert(d.getDate() + char + (d.getMonth() + 1) + char + d.getFullYear());
}

function month_name(date) {
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date = new Date(date);
    alert(monthArr[date.getMonth()])
}

function compare_dates(date1, date2) {

    if (Number(date1) == Number(date2))
        alert("date1 = date2")
    if (date1 > date2)
        alert("date1 > date2")
    if (date1 < date2)
        alert("date2 > date1")
}

function date_diff_indays(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    alert(~~((date2 - date1) / 1000 / 60 / 60 / 24))
}