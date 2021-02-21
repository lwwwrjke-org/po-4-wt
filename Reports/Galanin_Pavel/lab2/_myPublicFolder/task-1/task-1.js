function isNumber(x) {
    if (x.replace(/\d/g, '').length) {
        return 1;
    }
    else {
        return 0;
    }
}

while (1) {
    // input a
    let a = prompt("First number\na := ", 10);
    if (isNumber(a)) {
        alert("First input - not a number\n(первый ввод - не число)");
        break;
    }

    //input b
    let b = prompt("Second number\nb := ", 12);
    if (isNumber(b)) {
        alert("Second input - not a number\n(второй ввод - не число)");
        break;
    }

    //task
    if (a == b) {
        alert(
            "The numbers are equal\n"
            + "(числа равны)\n"
            + `${a} = ${b}`
        );
    }
    else if (a < b) {
        alert(
            "The first number is less\n"
            + "(первое число меньше)\n"
            + `${a} < ${b}`
        );
    }
    else {
        alert(
            "Second number less\n"
            + "(второе число меньше)\n"
            + `${a} > ${b}`
        );
    } //end task if
} //end infinity while
