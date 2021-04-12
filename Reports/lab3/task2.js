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

    let array1 = [2,5,6,8,1,5,4,3,7]
    alert(`Первый неотсортированный массив:\n${array1}`);
    alert(`Первый отсортированный массив:\n${sort(array1, array1.length)}`);

    let array2 = [8,7,13,6,5,2,11,18,15,4,3,1]
    alert(`Второй неотсортированный массив:\n${array2}`);
    alert(`Второй отсортированный массив:\n${sort(array2, array2.length)}`);
}