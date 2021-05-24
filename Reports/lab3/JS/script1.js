function task1()
{
    let start = Number(prompt("Начало диапазона:", 0))
    let end = Number(prompt("Конец диапазона:", 0))
    let step = Number(prompt("Шаг диапазона:", 1))

    function range(start, end, step)
    {
        let array = new Array()
        if (isNaN(start) || isNaN(end) || isNaN(step) || step === 0)
        {
            alert("Error")
            return
        }
        let index = start
        let length = end - start
        if (start > end && step > 0 || start < end && step < 0)
        {
            return alert("Error")
        }
        if (length < 0)
        {
            length = length - (length * 2)
        }
        for (let i = 0; i <= length; i++)
        {
            array[i] = index
            index += step
        }
        return array
    }
    console.log(range(start, end, step))
}