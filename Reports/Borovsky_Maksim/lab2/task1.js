function task1()
{
while(true)
{
var number1 = prompt("Введите число №1:");
if(!parseInt(number1))
{
alert("первый ввод - не число");
break;
}

var number2 = prompt("Введите число №2:");
if(!parseInt(number2))
{
alert("второй ввод - не число");
break;
}

if(number1 < number2)
alert("Второе число больше");
else if(number1 > number2)
alert("Первое число больше");
else
alert("Числа равны, как 2 капли воды");
}

}