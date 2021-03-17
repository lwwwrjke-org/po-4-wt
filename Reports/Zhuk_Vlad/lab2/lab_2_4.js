function lab_2_4() {
    while (1) {
        const YEAR = 2016
        var month = prompt("Введите число месяца");
        var day;
        month = Number(month);
        if (month < 1 || month > 12) {
            alert("Введённые вами данные не соответствуют условию");
            continue;
        }

        if (month == 2) {
            day = prompt("Введите день");
            day = Number(day);
            if (month == 2 && day > 29) {
                alert("Введённые вами данные не соответствуют условию");
                continue;
            }
        } else {
            day = prompt("Введите день");
            day = Number(day);
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
                || month == 10 || month == 12) {
                if (day < 1 || day > 31) {
                    alert("Введённые вами данные не соответствуют условию");
                    continue;
                }
            } else {
                if (day < 1 || day > 30) {
                    alert("Введённые вами данные не соответствуют условию");
                    continue;
                }
            }
        }

        if (isNaN(month) || isNaN(day)){
            alert("Введённые вами данные не соответствуют условию");
            continue;
        }

        var date = new Date(YEAR, month - 1, day);

        switch (date.getDay()) {
            case 0:
                alert("Воскресенье");
                break;
            case 1:
                alert("Понедельник");
                break;
            case 2:
                alert("Вторник");
                break;
            case 3:
                alert("Среда");
                break;
            case 4:
                alert("Четверг");
                break;
            case 5:
                alert("Пятница");
                break;
            case 6:
                alert("Суббота");
                break;
            default:
                alert("Ошибка");
        }
    }
}