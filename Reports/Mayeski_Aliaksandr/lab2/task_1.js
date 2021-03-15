
function TASK_1() {
    function CheckString(num) // проверка на ввод числа
{
    if (Number.parseInt(num)) {
        return num;
    }
    else return 0   
}
    var choice = 1;
    while (choice == 1) {
    var num1 = prompt("первое число: ");
    
    if (CheckString(num1)) { }
        
    else {alert("первый ввод - не число"); break; } 
    var num11 = Number.parseFloat(num1);
        
    let num2 = prompt("второе число: ");
        
    if (CheckString(num2)) { }
    else {alert("второй ввод - не число"); break; }
    var num22 = Number.parseFloat(num2);
    num11 > num22 ? alert("второе число меньше") : 
        num11 < num22 ? alert("первое число меньше") :
            num11 = num22 ? alert("числа равны") : alert("где-то ошибка");
    var choice = prompt("выход - 0 \nпродолжить - 1 ");
    }
}
