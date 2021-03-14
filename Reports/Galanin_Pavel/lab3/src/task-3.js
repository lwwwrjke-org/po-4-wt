function getIntRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function createMatrix(numRow, numCol) {
    if (numRow < 0 || numCol < 0) {
        return [];
    }

    var arr = [];
    for (var i = 0; i < numRow; i++) {
        arr.push([]);
        for (var j = 0; j < numCol; j++) {
            arr[i][j] = getIntRandom(0, 100);
        }
    }
    console.log(arr);
    return arr;
}

function get_2d_array_as_string(arr) {
    var numRow = 0;
    var numCol = 0;
    if (arr.length) {
        numRow = arr.length;
        if (arr[0].length) {
            numCol = arr[0].length;
        } else {
            return `arr[${numRow}][err] = []\n\n`;
        }
    } else {
        return "arr[err][err] = []\n\n";
    }

    var str = `arr[${numRow}][${numCol}] = [\n`;
    for (var i = 0; i < arr.length; i++) {
        str += "\t["
        for (var j = 0; j < arr[i].length; j++) {
            str += arr[i][j];
            str += "\t";
        }
        str += "]\n";
    }
    str += "]\n\n";

    return str;
}

function arr1_plus_arr2(arr1, arr2) {
    var numRow1 = 0;
    var numRow2 = 0;
    var numCol1 = 0;
    var numCol2 = 0;

    if (arr1.length) {
        numRow1 = arr1.length;
        if (arr1[0].length) {
            numCol1 = arr1[0].length;
        } else {
            console.log(`arr[${numRow1}][err]`);
            return [];
        }
    } else {
        console.log('arr1[err][err]');
        return [];
    }

    if (arr2.length) {
        numRow2 = arr2.length;
        if (arr2[0].length) {
            numCol2 = arr2[0].length;
        } else {
            console.log(`arr[${numRow1}][err]`);
            return [];
        }
    } else {
        console.log('arr2[err][err]');
        return [];
    }

    if (numRow1 != numRow2) {
        console.log(`err arr1[${numRow1}][${numCol1}] + arr2[${numRow2}][${numCol2}], because ${numRow1} != ${numRow2}`);
        return [];
    }

    if (numCol1 != numCol2) {
        console.log(`err arr1[${numRow1}][${numCol1}] + arr2[${numRow2}][${numCol2}], because ${numCol1} != ${numCol2}`);
        return [];
    }

    var arr = [];
    for (var i = 0; i < numRow1; i++) {
        arr.push([]);
        for (var j = 0; j < numCol1; j++) {
            arr[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return arr;
}

function main_task3() {
    var arr1 = createMatrix(2, 5);
    var arr2 = createMatrix(5, 2);
    var arr3 = createMatrix(0, 3);
    var arr4 = createMatrix(3, 0);
    var arr5 = createMatrix(1, 1);
    alert(
        "Checking matrix generation\n\n" +
        get_2d_array_as_string(arr1) +
        get_2d_array_as_string(arr2) +
        get_2d_array_as_string(arr3) +
        get_2d_array_as_string(arr4) +
        get_2d_array_as_string(arr5)
    );

    var arr_1 = createMatrix(2, 4);
    var arr_2 = createMatrix(2, 4);
    var sum_12 = arr1_plus_arr2(arr_1, arr_2);
    alert(
        "Sum of matrices\n\n" +
        get_2d_array_as_string(arr_1) +
        "+\n\n" +
        get_2d_array_as_string(arr_2) +
        "=\n\n" +
        get_2d_array_as_string(sum_12)
    );

    var arr_3 = createMatrix(2, 5);
    var arr_4 = createMatrix(2, 4);
    var sum_34 = arr1_plus_arr2(arr_3, arr_4);
    alert(
        "Sum of matrices\n\n" +
        get_2d_array_as_string(arr_3) +
        "+\n\n" +
        get_2d_array_as_string(arr_4) +
        "=\n\n" +
        get_2d_array_as_string(sum_34)
    );

    var arr_5 = createMatrix(3, 4);
    var arr_6 = createMatrix(2, 4);
    var sum_56 = arr1_plus_arr2(arr_5, arr_6);
    alert(
        "Sum of matrices\n\n" +
        get_2d_array_as_string(arr_5) +
        "+\n\n" +
        get_2d_array_as_string(arr_6) +
        "=\n\n" +
        get_2d_array_as_string(sum_56)
    );
}

document.getElementById("task3").onclick = main_task3;