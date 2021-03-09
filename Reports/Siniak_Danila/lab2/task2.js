function task2() {
    function ToInt(num) {
        if (Number.parseInt(num)) {
            return num;
        } else return 0
    }

    while (true) {
        var floor = prompt("Количество этажей? [1-25] ");
        if (ToInt(floor) && floor >= 1 && floor <= 25) {
            break;
        } else {
            alert("Введите целое число от 1 до 25")
        }
    }

    while (true) {
        var entrance = prompt("Количество подъездов? [1-10] ");
        if (ToInt(entrance) && entrance >= 1 && entrance <= 10) {
            break;
        } else {
            alert("Введите целое число от 1 до 10")
        }
    }

    while (true) {
        var apartments = prompt("Количество квартир на этаже? [1-20] ");
        if (ToInt(apartments) && apartments >= 1 && apartments <= 20) {
            break;
        } else {
            alert("Введите целое число от 1 до 20")
        }
    }

    var numberApartments = floor * entrance * apartments;

    ToInt(numberApartments);

    var urApartments = prompt("Номер вашей квартиры?");

    if (numberApartments < urApartments)
        alert("Быть такого не может")
    else {
        var urEntrance = urApartments / floor / apartments;
        alert("Ваш подъезд: " + Math.ceil(urEntrance));
    }

}