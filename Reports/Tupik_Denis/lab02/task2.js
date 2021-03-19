function task2(){
    let floor, entrance, flat, number, sum
    floor = prompt('Введите количество этажей (1-25)', '')
    floor = Number(floor)
    if (floor < 1 || floor > 25 || !Number.isInteger(floor)) {
        alert("Введены неверные значения")
        return
    }

    entrance = prompt('Введите количество подъездов (1-10)', '')
    entrance = Number(entrance)
    if (entrance < 1 || entrance > 10 || !Number.isInteger(entrance)) {
        alert("Введены неверные значения")
        return
    }

    flat = prompt('Введите количество квартир на одном этаже (1-20)', '')
    flat = Number(flat)
    if (flat < 1 || flat > 20 || !Number.isInteger(flat)) {
        alert("Введены неверные значения")
        return
    }

    sum = flat * entrance * floor

    number = prompt('Введите номер квартиры', '')
    number = Number(number)
    if (number <= sum || number > 0){
        entrance = number / flat / floor;
        entrance = Math.ceil(entrance);
        alert(`Данная кваритра находится в ${entrance} подъезде`);
    }
    else {
        alert("Такой квартиры не существует")
        return
    }

}

document.getElementById('task2').onclick = task2;