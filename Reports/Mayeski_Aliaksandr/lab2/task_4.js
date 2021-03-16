function TASK_4() {
    var day = prompt("Введите день")
    var month = prompt("Введите месяц")
    var year = prompt("Введите год")
    day = Number.parseInt(day)
    month = Number.parseInt(month)
    year = Number.parseInt(year)
    if (year % 4 == 0 && year % 100 != 0)
    {
        if (month == 2) {
            if (day >= 1 && day <= 29) { }
            else {
                alert("Error")
                return 1
            }

        }
    }
    else {
        if (month == 2) {
            if (day >= 1 && day <= 28) { }
            else {
                alert("Error")
            }

        }
        return 1
    }
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var date = new Date(prompt('введите дату', ''));
    alert(days[date.getDay()])
}
