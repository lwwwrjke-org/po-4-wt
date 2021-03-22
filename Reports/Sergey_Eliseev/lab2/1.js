let first;
let second;

//функция используется для прекращения работы скрипта (когда вводится не число)
//если не будет данной функции и мы будем использовать просто isNaN , то у нас просто будут просить заново вести число 
function isnan(testnum) {
    if (!isNaN(testnum)) {
        return true;
    } else {
        throw 'unexpected symbol';
    }
}

function comparison(first, second) {
    if (first > second) {
        alert("first num more than second")
    } else if (first < second) {
        alert("second num more than first")
    } else {
        alert("first = second")
    }
}

let fnum;
let snum;

while (true) {
    do {
        fnum = prompt("input first num");
    } while (!isnan(fnum));
    first = parseFloat(fnum);

    do {
        snum = prompt("input second num");
    } while (!isnan(snum));
    second = parseFloat(snum);

    comparison(first, second);
}