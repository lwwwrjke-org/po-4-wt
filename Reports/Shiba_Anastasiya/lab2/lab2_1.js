function lab2_1(){
  while (1){
    var num1 = prompt("Введите первое число:");
    if (isNaN(num1)){
        alert("Первый ввод - не число");
        break;
    }
    n1 = Number(num1);
    var num2 = prompt("Введите второе число:");
    if (isNaN(num2)){
        alert("Второй ввод - не число");
        break;
    }
    n2 = Number(num2);
    if (n1 == n2){
        alert("Числа равны");
    } else if (n1 > n2){
        alert("Второе число меньше");
    } else{
        alert("Первое число меньше");
    }
  }
}
