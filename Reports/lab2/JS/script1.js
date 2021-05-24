function task1()
{
    while (true)
    {
        let number1, number2
        number1 = prompt("Введите 1 число для сравнения:", null)
        number2 = prompt("Введите 2 число для сравнения:", null)

        number1 = Number(number1)
        number2 = Number(number2)

        if (isNaN(number1))
        {alert("Первый ввод - не число."); return 0;}

        else if (isNaN(number2))
        {alert("Второй ввод - не число."); return 0;}

        else
        {
            let result
            if (number1 == number2)
                alert("Числа равны")
            else
            {
                result = number1 > number2 ? "Второе число меньше" : "Первое число меньше"
                alert(result)
            }
        }
    }
}