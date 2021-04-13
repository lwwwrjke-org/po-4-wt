var arr = [2, , 21, , 0, 8];        
alert("Исходный массив: " + arr);

function compator(a, b){
    return a > b;
}

function sort (tempArr) {
var temp;
for (var i = 0; i < tempArr.length; i++) {
    for(j = tempArr.length - 1; j > i; j--){
        if (compator(tempArr[j-1], tempArr[j])){
            temp = tempArr[j-1];
            tempArr[j-1] = tempArr[j];
            tempArr[j] = temp;
        }
    }
}
return arr;
}

function sort_sparse(arr, sort) {
    var tempArr = [], indexes = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            tempArr.push(arr[i]);     // записываем все определенные значения(получаем нормальный массив)
            indexes.push(i);         // записываем индексы этих значений
        }
    }

    sort(tempArr);  //сортируем массив

    // возвращаем отсортированные значения в индексы исходного массива
    for (var i = 0; i < indexes.length; i++) {
        arr[indexes[i]] = tempArr[i];
    }
    return(arr);
}

sort_sparse(arr, sort);
alert("Отсортированный массив: " + arr);