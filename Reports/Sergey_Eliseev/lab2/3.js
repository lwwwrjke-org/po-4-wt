function Fib(i) {
    if (i == 0) {
        return 0;
    } else if (i == 1) {
        return 1;
    } else {
        return Fib(i - 1) + Fib(i - 2);
    }
}

//функция используется для прекращения работы скрипта (когда вводится не число)
//если не будет данной функции и мы будем использовать просто isNaN , то у нас просто будут просить заново вести число 

function isnan(testnum) {
    if (!isNaN(testnum)) {
        return true;
    } else {
        throw 'unexpected symbol';
    }
}

let i;

while (true) {
    do {
        i = prompt("input num of Fib");
    } while (!isnan(i));
    i = parseInt(i);
    alert(Fib(i))
}