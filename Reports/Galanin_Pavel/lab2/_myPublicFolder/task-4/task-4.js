function isNumber(x) {
    if (x.replace(/\d/g, '').length) {
        return 1;
    }
    else {
        return 0;
    }
}

function getWeekDay(date) {
    var days = [
        'Sunday (Воскресенье)',
        'Monday (Понедельник)',
        'Tuesday (Вторник)',
        'Wednesday (Среда)',
        'Thursday (Четверг)',
        'Friday (Пятница)',
        'Saturday (Суббота)'
    ];
    var day = date.getDay();

    return days[day];
}

while (1) {
    //input year
    let year = prompt("Year (год): ", 2016);
    if (isNumber(year)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }

    //input month
    let month = prompt("Month (месяц)", 1);
    if (isNumber(month)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    else if (!(1 <= month && month <= 12)) {
        alert(
            "Month not in set [1; 12]\n"
            + "(Месяц не во множестве [1; 12])"
        );
        break;
    }

    //input day
    let day = prompt("Day (день)", 1);
    if (isNumber(day)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    else if (!(1 <= day && day <= 31)) {
        alert(
            "Day not in set [1; 31]\n"
            + "(День не во множестве [1; 31])"
        );
        break;
    }

    if (month == 2 && day > 29) {
        alert(
            "Month February. Day not in set [1; 29]\n"
            + "(Месяц февраль. День не во множестве [1; 29])"
        );
        break;
    }

    //task
    let DateObject = new Date(year, month - 1, day);
    alert(
        `Year (год): ${year}\n`
        + `Month (месяц): ${month}\n`
        + `Day (день): ${day}\n`
        + "\n"
        + `Day of week (день недели): <<${getWeekDay(DateObject)}>>`
    );
    //console.log(DateObject);
} //end infinity while
