function task3() {
    function fib(n) 
    {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    while (true) {
        var number = prompt("Номер числа Фибоначчи: ");

        if (parseInt(number) && number >= 0)
            alert(fib(number));
        else
        {
            alert("Ошибка ввода");
          break;
        }
    }
}