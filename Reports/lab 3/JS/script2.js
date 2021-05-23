"use strict"

function secondScript() {

    let newArray = [1, 4, 5, 2, 4, 7, 6, 8, 5, 2]

    function bubbleSort(arr) {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            let wasSwap = false;
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                    let swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                    wasSwap = true;
                }
            }
            if (!wasSwap) break;
        }
        return arr;
    }

    alert(`Не отсортированный массив: ${newArray}`)
    let sortArray = bubbleSort(newArray)
    alert("Сортировка пузырьком...")
    alert(`Отсортированный массив: ${sortArray}`)


}
