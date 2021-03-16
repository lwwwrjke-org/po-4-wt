function task1() {
    function Int(num) {
        if (Number.parseInt(num)) {
            return num;
        } else return 0
    }

    var choice = 1;
    while (choice == 1) {
        var num1 = prompt("первое число: ");

        if (Int(num1)) {
        } else {
            alert("первый ввод - не число");
            break;
        }
        var num1var = Number.parseFloat(num1);

        let num2 = prompt("второе число: ");

        if (Int(num2)) {
        } else {
            alert("второй ввод - не число");
            break;
        }
        var num2var = Number.parseFloat(num2);
        num1var > num2var ? alert("второе число меньше") :
            num1var < num2var ? alert("первое число меньше") :
                num1var = num2var ? alert("числа равны") : alert("где-то ошибка");
        var choice = prompt("выход - 0 \nпродолжить - 1 ");
    }
}