function task3() {
    function Fibbonachi(a) {
        if (a == 0) {
            return 0;
        }
        if (a == 1) {
            return 1
        }
        return Fibbonachi(a - 1) + Fibbonachi(a - 2);
    }
    
    while(true) {
        a = prompt("a = ", 0);
        if (isNaN(a)) {
            alert("Invalid input!\n");
            continue;
        }
        a = parseInt(a)
        alert("Result = " + Fibbonachi(a));
    }
}
