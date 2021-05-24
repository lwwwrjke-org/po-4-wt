function task3()
{
    function callPrompt()
    {
        let n = prompt("Введите число");
        alert("Число Фибоначчи: " + fib(n));
    }
    callPrompt()
    function fib(n)
    {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++)
        {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}