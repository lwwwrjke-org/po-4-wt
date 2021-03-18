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

var a = parseInt(number1);
var b = parseInt(number2); 

if(a < b)
alert("Второе число больше");
else if(a > b)
alert("Первое число больше");
else
alert("Числа равны, как 2 капли воды");
}

}