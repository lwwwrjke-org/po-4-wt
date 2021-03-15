function range(a, b, step = 1) {
    var arr = [];

    if (a < b && step > 0) { // range(2, 5, 1)
        for (var i = a; i <= b; i += step) {
            arr.push(i);
        }
    } else if (a < b && step < 0) { //range(2, 5, -1)
        //...
    } else if (a > b && step > 0) { //range(5, 2, 1)
        //...
    } else if (a > b && step < 0) { //range(5, 2, -1)
        for (i = a; i >= b; i += step) {
            arr.push(i);
        }
    } else {
        console.log('New way?');
    }

    console.log(`range(${a}, ${b}, ${step}) = [${arr}]`);

    return arr;
}

function main_task1() {
    alert(
        `range(2, 5,  1) = [${range(2, 5,  1)}]\n` +
        `range(2, 5, -1) = [${range(2, 5, -1)}]\n` +
        `range(5, 2,  1) = [${range(5, 2,  1)}]\n` +
        `range(5, 2, -1) = [${range(5, 2, -1)}]\n` +
        `\n` +
        `range(-5, 15,  3) = [${range(-5, 15,  3)}]\n` +
        `range(-5, 15, -3) = [${range(-5, 15, -3)}]\n` +
        `range(15, -5,  3) = [${range(15, -5,  3)}]\n` +
        `range(15, -5, -3) = [${range(15, -5, -3)}]\n` +
        `\n` +
        `range(-3, 3     ) = [${range(-3, 3     )}]\n`
    );
}

document.getElementById("task1").onclick = main_task1;