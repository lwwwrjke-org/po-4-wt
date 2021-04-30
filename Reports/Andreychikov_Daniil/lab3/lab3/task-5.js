function flatten(obj) {
    // var str = obj.toString().split(',');
    // var arr = str;
    let arr = obj.flat(Infinity);

    console.log(arr);

    return arr;
}

function main_task5() {
    alert(
        `flatten([1, [2], [3, [4]]]) = [${flatten([1, [2], [3, [4]]])}]`
    );
}

document.getElementById("task5").onclick = main_task5;