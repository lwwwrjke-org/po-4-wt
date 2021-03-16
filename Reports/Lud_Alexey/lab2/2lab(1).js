    while (1){
    var num1 = prompt("Введите первое число:");
    var num2 = prompt("Введите второе число:");
    if (isNaN(num1)){
        alert("Первый ввод - не число");
        break;
    }
    if (isNaN(num2)){
        alert("Второй ввод - не число");
        break;
    }
    if (num1 == num2){
        alert("Числа равны");
    } else if (num1 > num2){
        alert("Второе число меньше");
    } else{
        alert("Первое число меньше");
    }
}
