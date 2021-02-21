function isNumber(x) {
    if (x.replace(/\d/g, '').length) {
        return 1;
    }
    else {
        return 0;
    }
}

function getFibonacci(n) {
    if (n > 2) {
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    }
    else {
        return 1;
    }
}

while (1) {
    // input x
    let x = prompt("x := ", 10);
    if (isNumber(x)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    //task
    alert(`Fibonacci(${x}) = ${getFibonacci(x)}`);
} //end infinity while
