"use strict"

function secondScript(){
    let floorsCount = Number(prompt("Введите число этажей"))
    let entrancesCount = Number(prompt("Введите число подъездов"))
    let flatsCount = Number(prompt("Введите число квартир"))


    if ((1 > floorsCount > 25) || isNaN(floorsCount)) {
        alert("Некорректное число этажей")
    } else if ((1 > entrancesCount > 10) || isNaN(entrancesCount)) {
        alert("Некорректное число подъездов")
    } else if ((1 > flatsCount > 20) || isNaN(flatsCount)) {
        alert("Некорректное число квартир")
    }

    let flatNumber = Number(prompt("Введите номер квартиры"))

    if (isNaN(flatNumber)) {
        alert("Некорректное число квартир")
    }

    let result = Math.ceil((Math.ceil(flatNumber / floorsCount)) / entrancesCount)
    alert("Номер подъезда:" , result)
}

