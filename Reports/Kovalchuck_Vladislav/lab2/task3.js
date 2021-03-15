function task3()
{
	var a = 0;
	var b = 1;
	var sum = 0;
	var n = 1;

	while(true){

		var i = prompt("Введите № числа Фибоначчи:");
		if (!parseInt(i))
		{
			alert("Где-то ошибка");               
		} 

		else { 
			while(n < i)
			{												
				sum = a + b;											
				a = b;
				b = sum;
				n++;
			}

			if (i == 0)
			{												
				alert("result= " + 0);
				break;
			} 
			else 
			{
				alert("result= " + (b+a));											
				break;
			}
		}
	}
}