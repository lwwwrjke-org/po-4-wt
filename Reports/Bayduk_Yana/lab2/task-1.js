function main_task1() {
    for (;;) {
        // input a
        let a = prompt("First number\na := ", 10);
        if (isNaN(a)) {
            alert("First input - not a number\n(первый ввод - не число)");
            break;
        } else {
            a = parseFloat(a);
        }

        //input b
        let b = prompt("Second number\nb := ", 12);
        if (isNaN(b)) {
            alert("Second input - not a number\n(второй ввод - не число)");
            break;
        } else {
            b = parseFloat(b);
        }

        //task   
        if (a < b) {
            alert(
                "The first number is less\n" +
                "(первое число меньше)\n" +
                `${a} < ${b}`
            );
        } else if (a > b) {
            alert(
                "Second number less\n" +
                "(второе число меньше)\n" +
                `${a} > ${b}`
            );
        } else {
            alert(
                "The numbers are equal\n" +
                "(числа равны)\n" +
                `${a} = ${b}`
            );
        } //end task if
    } //end infinity while
}

document.getElementById("task1").onclick = main_task1;