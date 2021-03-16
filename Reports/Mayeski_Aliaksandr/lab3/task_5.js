function TASK_5() {
    function flatten(array) { //способ 1
        var flattend = [];
        (function flat(array) {
            array.forEach(function (el) {
                if (Array.isArray(el)) flat(el);
                else flattend.push(el);
            });
        })(array);
        return flattend;
    }
    var arr2 = [1, [2], [3, [4], [1, [2], [3, [4]]]], [3, [4]]]
    alert(flatten(arr2))

    var arr1 = [1, [2], [3, [4], [1, [2], [3, [4]]]]] //способ 2
    const flatSingle = arr1 => [].concat(...arr1);
    alert(flatSingle(arr1))

    var arr = [1, [2], [3, [4]]]
    alert(arr.flat()) //способ 3
}