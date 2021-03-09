function TASK_2() {
    var arr = []
    arrLenght = prompt("Количество элементов? ");
    for (var i = 0; i < arrLenght; i++) //заполнение массива
    {
        var number = prompt("Введите " + i + "-ое число");
        number = Number.parseInt(number)
        arr[i] = number
    }
    for (var j = arrLenght - 1; j > 0; j--) { //пузырьковая сортировка
        for (var i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    alert(arr)
}