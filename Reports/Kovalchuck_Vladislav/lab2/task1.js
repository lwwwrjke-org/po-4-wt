function task1()
{
	while(true)
	{
		var num1 = prompt("Введите первое число:");
		if(!parseInt(num1))
		{
			alert("первый ввод - не число");
			break;
		}

		var num2 = prompt("Введите второе число:");
		if(!parseInt(num2))
		{
			alert("второй ввод - не число");
			break;
		}

		if(num1 > num2)
			alert("Второе число меньше");
		else if(num1 < num2)
			alert("Первое число меньше");
		else
			alert("Числа равны");
	}

}