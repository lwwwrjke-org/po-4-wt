function task2() {
    function sort(arr, size) {
        let min, temp;
        for (let i = 0; i < size - 1; i++) {
            min = i;
            for (let j = i + 1; j < size; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            temp     = arr[i];      // меняем местами i-ый и минимальный элементы
            arr[i]   = arr[min];
            arr[min] = temp;
        }
        return arr;
    }

    let array1 = [3,3,6,1,8,5,9,4,0]
    alert(`Неотсоритированный массив 1:\n${array1}`);
    alert(`Отсоритированный массив 1:\n${sort(array1, array1.length)}`);

    let array2 = [2,1,6,5,0,9,7,6,8,3]
    alert(`Неотсортированный массив 2:\n${array2}`);
    alert(`Отсортированный массив 2:\n${sort(array2, array2.length)}`);
}