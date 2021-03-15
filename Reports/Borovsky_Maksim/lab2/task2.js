function task2()
{
while(true){

var num1 = prompt("Введите число подъездов (от 1 до 10): ");
var num2 = prompt("Введите количество этажей (от 1 до 25): ");
var num3 = prompt("Введите число квартир лест. площ.(от 1 до 20): ");

if (num1 >= 1 && num1 <= 10 && num2 >= 1 && num2 <= 25 && num3 >= 1 && num3 <= 20){
var n = prompt("Введите номер квартиры");

if ((num1*num2*num3) < n || n < 0){
alert("ошибка");
continue;
}

alert("квартира в подъезде " + Math.ceil(n/(num2*num3)));
break;
}
else {
alert("ошибка");
break;
}
}
}