function task1()
{
while(true)
{
var number1 = prompt("Введите число №1:");
if(!parseFloat(number1))
{
alert("первый ввод - не число");
break;
}

var number2 = prompt("Введите число №2:");
if(!parseFloat(number2))
{
alert("второй ввод - не число");
break;
}

var a = parseFloat(number1);
var b = parseFloat(number2); 

if(a < b)
alert("Второе число больше");
else if(a > b)
alert("Первое число больше");
else
alert("Числа равны, как 2 капли воды");
}

}