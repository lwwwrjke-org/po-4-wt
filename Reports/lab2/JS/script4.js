"use script"
function fourScript() {
    let numberMonth = Number(prompt("Введите номер месяца (1-12):"))
    let numberDay = Number(prompt("Введите день месяца (1-31):"))
    const year = 2016

    while (isNaN(numberDay) || isNaN(numberMonth)
    || 1 >= numberDay >= 31
    || 1 >= numberMonth >= 12) {
        alert("Данные введены неверно!");
        numberMonth = prompt("Введите номер месяца (1-12):")
        numberDay = prompt("Введите день месяца (1-31):")
    }

    let date = new Date(`${year}, ${numberMonth}, ${numberDay}`)
    let day = date.getDay()
    let result
    switch (day) {
        case 0: {
            result = "Воскресенье";
            break;
        }
        case 1: {
            result = "Понедельник";
            break;
        }
        case 2: {
            result = "Вторник";
            break;
        }
        case 3: {
            result = "Среда";
            break;
        }
        case 4: {
            result = "Четверг";
            break;
        }
        case 5: {
            result = "Пятница";
            break;
        }
        case 6: {
            result = "Суббота";
            break;
        }
        default: {
            result = "Error";
            break;
        }
    }
    alert(result);
}