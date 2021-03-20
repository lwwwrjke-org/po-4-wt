function compare (el1, el2) {
    return el1 - el2;
}

function qsort (array, comparator=compare) {
    if(array.length < 2) {
        return array;
      }
    const pivot = array[array.length-1]; // опорный элемент
    const left = []; //меньше опорного
    const right = []; //больше опорного
    for (const el of array.slice(0, array.length-1)) {
        comparator (el, pivot) < 0 ? left.push(el) : right.push(el);
    }
    return [...qsort(left), pivot, ...qsort(right)];
}

function main2 () {
    let array = [-5,2,11,29,7,34,9,0,2,16];
    console.log (qsort (array));
    return 0;
}