function task4()
{
    let number_month = Number(prompt("Введите номер месяца (1-12):", null))
    let number_day = Number(prompt("Введите день месяца (1-31):", null))
    const year = 2016

    while (isNaN(number_day)
    || isNaN(number_month)
    || number_day === null
    || number_month === null
    || 1 >= number_day >= 31
    || 1 >= number_month >= 12)
    {
        alert("Введите данные заново.");
        number_month = prompt("Введите номер месяца (1-12):", null)
        number_day = prompt("Введите день месяца (1-31):", null)
    }

    let date = new Date(`${year}, ${number_month}, ${number_day}`)
    let day = date.getDay()
    let result
    switch (day)
    {
        case 0:
        {result = "Воскресенье";break;}
        case 1:
        {result = "Понедельник";break;}
        case 2:
        {result = "Вторник";break;}
        case 3:
        {result = "Среда";break;}
        case 4:
        {result = "Четверг";break;}
        case 5:
        {result = "Пятница";break;}
        case 6:
        {result = "Суббота";break;}
        default: {  result= "Error"; break; }
    }
    alert(result);
}