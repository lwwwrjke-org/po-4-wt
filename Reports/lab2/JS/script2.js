function task2()
{
    let number_of_apartment
    let Flat =
        {
            number_of_storeys: 0,//этажность
            number_of_entrances: 0,//количество подъездов
            number_of_apartments_staircase: 0,//количество квартир подъезд
        };

    function enter()
    {
        Flat.number_of_storeys = Number(prompt("Введите этажность (от 1-25):", null))
        Flat.number_of_entrances = Number(prompt("Введите число подъездов (от 1-10):", null))
        Flat.number_of_apartments_staircase = Number(prompt("Введите кол-во квартир на лест. площадке (от 1-20):", null))
        number_of_apartment = Number(prompt("Введите номер квартиры:"))
    } enter();

    if (isNaN(Flat.number_of_storeys)
        || isNaN(Flat.number_of_entrances)
        || isNaN(Flat.number_of_apartments_staircase)
        || isNaN(number_of_apartment)
        || 1 <= Flat.number_of_storeys <= 25
        || 1 <= Flat.number_of_entrances <= 10
        || 1 <= Flat.number_of_apartments_staircase <= 20)
    {
        alert("Ошибка ввода, попробуйте еще раз!");
        enter();
    }

    function search(index, NumberOfEntrances)
    {
        if (index === number_of_apartment)
        {
            alert(`Номер подъезда в котором находиться квартира (${index}): ${NumberOfEntrances}`)
            return true;
        }
        else return false;
    }

    function create()
    {
        let number_array = new Array
        let index = 1
        for (let NumberOfEntrances = 1; NumberOfEntrances <= Flat.number_of_entrances; NumberOfEntrances++) //генерация всех подъездов
        {
            for (let NumberOfStoreys = 1; NumberOfStoreys <= Flat.number_of_storeys; NumberOfStoreys++) //генерация одного подъезда
            {
                for (let NumberOfApartmentsStaircase = 1; NumberOfApartmentsStaircase <= Flat.number_of_apartments_staircase; NumberOfApartmentsStaircase++, index++)
                {
                    number_array[NumberOfEntrances[NumberOfStoreys[NumberOfApartmentsStaircase]]] = index
                    if (search(index, NumberOfEntrances)) return
                }
            }
        }
    }
    create()
}