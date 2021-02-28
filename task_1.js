
function TASK_1() {
    function ToInt(num)
{
    if (Number.parseInt(num)) {
        return num;
    }
    else return 0   
}
    var choice = 1;
    while (choice == 1) {
    var num1 = prompt("первое число: ");
    if (ToInt(num1)) { }
    else {alert("первый ввод - не число"); break; } 
        
    let num2 = prompt("второе число: ");
    if (ToInt(num2)) { }
    else {alert("второй ввод - не число"); break; }

    num1 > num2 ? alert("второе число меньше") : 
        num1 < num2 ? alert("первое число меньше") :
            num1 = num2 ? alert("числа равны") : alert("где-то ошибка");
    var choice = prompt("выход - 0 \nпродолжить - 1 ");
    }
}
