//функция используется для прекращения работы скрипта (когда вводится не число)
//если не будет данной функции и мы будем использовать просто isNaN , то у нас просто будут просить заново вести число 

function isnan(testnum) {
    if (!isNaN(testnum)) {
        return true;
    } else {
        throw 'unexpected symbol';
    }
}

function istrue1(testnum1) {
    if (1 <= testnum1 && testnum1 <= 10) {
        return true;
    } else {
        throw 'unexpected num';
    }
}

function istrue2(testnum2) {
    if (1 <= testnum2 && testnum2 <= 25) {
        return true;
    } else {
        throw 'unexpected num';
    }
}

function istrue3(testnum3) {
    if (1 <= testnum3 && testnum3 <= 20) {
        return true;
    } else {
        throw 'unexpected num';
    }
}

function searchentrance(a, b, c) {
    let answer = a / b / c;
    answer = Math.ceil(answer);
    alert(answer);
}

let entrances;
let stages;
let flats;

while (true) {
    do {
        do {
            entrances = prompt("input num of entrance(1-10)");
            stages = prompt("input num of stage(1-25)");
            flats = prompt("input num of stage(1-20)");
        } while (!isnan(entrances) && !isnan(stages) && !isnan(flats));
        entrances = parseInt(entrances);
    } while (!istrue1(entrances) && !istrue2(stages) && !istrue3(flats));

    searchentrance(entrances, stages, flats);
}