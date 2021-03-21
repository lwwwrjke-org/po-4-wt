var result = [];

function flatten1 (array){ //простой способ
    return array.flat();
}

function flatten (array){
    for (item of array) {
        if (typeof item == "object") { //массив это объект, а числа будут типа number и попадать в else
            flatten(item); //typeof возвращает тип операнда
        }
        else {
            result.push(item);
        }
    }
}

function main () {
    let array = [1, [2], [3, [4,[[78, 11]], [1, [22], 9]], [0, 4]], [7]];
    flatten(array);
    document.getElementById('info').innerHTML = `Полученные числа: ${result}` + `<p>Полученные числа с помощью flat(): ${flatten1(array)}</p>`;
} 

let button = document.querySelector('.button');
button.addEventListener('click', main);