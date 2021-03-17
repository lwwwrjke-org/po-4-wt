function lab_2_2(){
    var floor = prompt("Введите колличество этажей от 1 до 25");
    floor = Number(floor);
    if (isNaN(floor) || floor < 1 || floor > 25){ // Проверяем на истинность числа и выполнение условий
        alert("Введённые вами данные не соответствуют условию");
        throw "Введённые вами данные не соответствуют условию";
    }

    var padik = prompt("Введите колличество подъездов от 1 до 10");
    padik = Number(padik);
    if (isNaN(padik) || padik < 1 || padik > 10){ // Проверяем на истинность числа и выполнение условий
        alert("Введённые вами данные не соответствуют условию")
        throw "Введённые вами данные не соответствуют условию";
    }

    var flat = prompt("Введите колличество квартир от 1 до 20");
    flat = Number(flat);
    if (isNaN(flat) || flat < 1 || flat > 20){ // Проверяем на истинность числа и выполнение условий
        alert("Введённые вами данные не соответствуют условию");
        throw "Введённые вами данные не соответствуют условию";
    }

    var flat_all = floor * flat * padik; // общее количество квартир

    var search_flat = prompt("Введите искомую квартиру от 1 до " + flat_all);
    search_flat = Number(search_flat);
    if (isNaN(search_flat) || search_flat < 1 || search_flat > flat_all){ // Проверяем на истинность числа и выполнение условий
        alert("Введённые вами данные не соответствуют условию");
        throw "Введённые вами данные не соответствуют условию";
    }

    var your_padik = search_flat / flat / floor;
    your_padik = Math.ceil(your_padik);
    alert("Искомая вами квартира (" + search_flat + ") находится в " + your_padik + " поъезде");
} 