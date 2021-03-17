function lab_2_3() {
    function Fibbonachi(num) {
        if (num == 0) {
            return 0;
        }
        if (num == 1) {
            return 1
        }
        return Fibbonachi(num - 1) + Fibbonachi(num - 2);
    }


    while(true) {
        num = prompt("Введите параметр i: ");
        if (isNaN(num)) {
            alert("Введённые вами данные не являются числом");
            throw "Введённые вами данные не являются числом";
        }
        num = parseInt(num)
        alert("Искомое вами число является число: " + Fibbonachi(num));
    }
}

