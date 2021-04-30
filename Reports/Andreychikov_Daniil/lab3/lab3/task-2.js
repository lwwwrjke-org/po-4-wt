function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function sort(arr, func = compare) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (func(arr[i], arr[j]) < 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

function main_task2() {
    alert(
        `sort([5, 8, 2, 4, 6, 0, 9, 8, 7, 6, 5, 1, 2, 3, 4, 5, 6]) = [${sort([5, 8, 2, 4, 6, 0, 9, 8, 7, 6, 5, 1, 2, 3, 4, 5, 6])}]`
    );
}

document.getElementById("task2").onclick = main_task2;