function union(...arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
         result = result.concat(arrays[i]); //собираем массивы в кучу
    }
    let unique;
    unique = new Set(result); //Set позволяет сохранять уникальные значения любого типа
    return [...unique];
  }

  function main() { 
    document.getElementById('info').innerHTML = `Полученный массив: ${union([1, 61, 2, 4.3, 5, 2, 1111, 3], [101, 2, 4.3, 1, 5, 10], [2, 2.1, 16, 1])}`;
  }

  let button = document.querySelector('.button');
  button.addEventListener('click', main);
