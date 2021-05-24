function task4()
{
    function union()
    {
        let result = []

        if (!arguments || arguments.length <= 1) return "Нечего объединить!!!"
        else
        {
            for (let i = 0; i < arguments.length; i++)
            {
                if (arguments[i] instanceof Array)
                {
                    for (let j = 0; j < arguments[i].length; j++)
                        result.push(arguments[i][j])
                }
            }

            return result
        }
    }

    console.log(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1], [4, 7, 4, 2, 5, 7, 8, 54565, 32343535, 8080876453]))
}