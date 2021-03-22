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

    let array1 = [1,3,3,2,6,5,7,0,1]
    alert(`First not sorted array:\n${array1}`);
    alert(`First sorted array:\n${sort(array1, array1.length)}`);

    let array2 = [6,4,2,8,1,9,10,11,4,1]
    alert(`Second not sorted array:\n${array2}`);
    alert(`Second sorted array:\n${sort(array2, array2.length)}`);
}