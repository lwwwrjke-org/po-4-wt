function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function main() { 
    var arr = [3, 1, 6, 8, 8.2, 0, -1, -9, 34, 4, 2, 12.3, 1];
    return document.getElementById('sort').innerHTML = `Полученный отсортированный массив: ${bubbleSort(arr)}`;
}

let button = document.querySelector('.button');
button.addEventListener('click', main);