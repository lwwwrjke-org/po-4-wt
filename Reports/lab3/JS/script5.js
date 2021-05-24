function task5()
{
    function flatten(array)
    {
        if (!(array instanceof Array) || (array === [])) return "Массив пустой или отсутствует"
        else
            {
                let result = []

                for (let i = 0; i <= array.length; i++)
                {
                    for (let j = 0; j <= array[i].length; j++)
                        result = array[i][j]
                    return result
                }
            }
    }

    console.log(flatten([1, [2], [3, [4]]]))
}