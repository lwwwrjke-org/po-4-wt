function getFibonacci(n) {
    if (n > 2) {
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    } else {
        return 1;
    }
}

function main_task3() {
    for (;;) {
        // input x
        let x = prompt("x := ", 10);
        if (isNaN(x)) {
            alert("Input - not a number\n(ввод - не число)");
            break;
        }
        x = parseFloat(x);
        //task
        alert(`Fibonacci(${x}) = ${getFibonacci(x)}`);
    } //end infinity while
}

document.getElementById("task3").onclick = main_task3;