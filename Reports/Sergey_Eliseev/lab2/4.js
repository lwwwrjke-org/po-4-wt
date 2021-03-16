let day = prompt("input day");

day = parseInt(day);

if (isNaN(day)) {
    throw "unexpected number";
}

let month = prompt("input month");

month = parseInt(month);

function day31() {
    if (day < 1 || 31 < day) {
        throw "unexpected number";
    }
}

if (month == 1 || 3 || 5 || 7 || 9 || 11) {
    day31(day);
}

function day30() {
    if (day < 1 || 30 < day) {
        throw "unexpected number";
    }
}

if (month == 4 || 6 || 8 || 10 || 12) {
    day30(day);
}

if (isNaN(month) || month < 1 || month > 12) {
    throw "unexpected number";
}

if (month == 2 && day > 29) {
    throw "unexpected number";
}

let date = new Date(2016, month - 1, day);
let options = { weekday: 'long' };
let answer = new Intl.DateTimeFormat('ru-RU', options).format(date)
alert(answer);