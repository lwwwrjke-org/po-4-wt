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

function main_task4() {
    for (;;) {
        //input year
        let year = prompt("Year (год): ", 2016);
        if (isNaN(year)) {
            alert("Input - not a number\n(ввод - не число)");
            break;
        }
        year = parseInt(year);

        //input month
        let month = prompt("Month (месяц)", 1);
        if (isNaN(month)) {
            alert("Input - not a number\n(ввод - не число)");
            break;
        }
        month = parseInt(month);
        if (!(month >= 1 && month <= 12)) {
            alert(
                "Month not in set [1; 12]\n" +
                "(Месяц не во множестве [1; 12])"
            );
            break;
        }

        //input day
        let day = prompt("Day (день)", 1);
        if (isNaN(day)) {
            alert("Input - not a number\n(ввод - не число)");
            break;
        }
        day = parseInt(day);
        if (!(day >= 1 && day <= 31)) {
            alert(
                "Day not in set [1; 31]\n" +
                "(День не во множестве [1; 31])"
            );
            break;
        }

        if (month == 2 && day > 29) {
            alert(
                "Month February. Day not in set [1; 29]\n" +
                "(Месяц февраль. День не во множестве [1; 29])"
            );
            break;
        }

        //task
        let DateObject = new Date(year, month - 1, day);
        alert(
            `Year (год): ${year}\n` +
            `Month (месяц): ${month}\n` +
            `Day (день): ${day}\n` +
            "\n" +
            `Day of week (день недели): <<${getWeekDay(DateObject)}>>`
        );
        //console.log(DateObject);
    } //end infinity while
}

document.getElementById("task4").onclick = main_task4;