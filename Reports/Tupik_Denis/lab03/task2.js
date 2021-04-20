function task2_1(){
    function bubbleSortConcept(arr) {
        for (let j = arr.length - 1; j > 0; j--) {
          for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
            }
          }
        }
    }

    let size = prompt("Введите размер массива: ")
    size = Number(size)
    if(isNaN(size)){
        alert("Ошибка!")
        return 0
    }

    let array = []

    for (let i = 0; i < size; i++){
        let a = Math.random()*100
        a = Number.parseInt(a)
        array.push(a)
    }

    let sort_array = []
    for(let i=0; i < array.length; i++){
        sort_array[i] = array[i]
    }

    bubbleSortConcept(sort_array)

    alert("Вывод исходного массива: [" + array + "]\nОтсортированный массив: [" + sort_array + "]")
}

document.getElementById('task2').onclick = task2_1