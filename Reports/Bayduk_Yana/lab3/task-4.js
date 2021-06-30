function union(...args) {
    var i = 0;
    var j = 0;

    for (i = 0; i < args.length; i++) {
        if (!args[i].length) {
            return [];
        }
    }

    var arr = [];
    for (i = 0; i < args.length; i++) {
        for (j = 0; j < args[i].length; j++) {
            arr.push(args[i][j]);
        }
    }

    var union = [];
    for (i = 0; i < arr.length; i++) {
        var k = 0;
        for (j = 0; j < union.length; j++) {
            if (arr[i] == union[j]) {
                k += 1;
                break;
            }
        }
        if (k == 0) {
            union.push(arr[i]);
        }
    }

    return union;
}

function main_task4() {
    alert(
        `union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) = [${union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1])}]`
    );
}

document.getElementById("task4").onclick = main_task4;