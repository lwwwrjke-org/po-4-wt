function task3()
{
    const _MIN = 0
    const _MAX = 100
    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function createMatrix(line, column)
    {
        let number = 0
        let matrix = []

        for (let i = 0; i <= line-1; i++)
        {
            matrix[i] = new Array(column)
            for (let j = 0; j <= column-1; j++)
            {
                number = getRandomInt(_MIN, _MAX)
                matrix[i][j] = number
            }
        }
        return matrix
    }
    function summ_matrix()
    {
        let array1 = [], array2 = [], result = []

        array1 = createMatrix(3, 3)
        array2 = createMatrix(3, 2)
        console.log(array1)
        console.log(array2)
        for (let i = 0; i < array1.length; i++)
        {
            result[i] = new Array
            for (let j = 0; j < array1[i].length; j++)
                result[i][j] = array1[i][j] + array2[i][j]
        }
        return console.log(result)
    }
    summ_matrix()
}
