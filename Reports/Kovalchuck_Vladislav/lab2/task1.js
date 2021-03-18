function task1()
{
	while(true)
	{
		var num1 = prompt("Введите первое число:");
		if(!parseFloat(num1))
		{
			alert("первый ввод - не число");
			break;
		}

		var num2 = prompt("Введите второе число:");
		if(!parseFloat(num2))
		{
			alert("второй ввод - не число");
			break;
		}

		var a = parseFloat(num1);
		var b = parseFloat(num2);
		
		if(a > b)
			alert("Второе число меньше");
		else if(a < b)
			alert("Первое число меньше");
		else
			alert("Числа равны");
	}

}