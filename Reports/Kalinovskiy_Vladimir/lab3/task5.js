var array2 = [];

function flatten (arr1){
    
    for (element of arr1) {
        if (typeof element == 'object'){
            flatten (element)
        }
        else {
            array2.push(element);
        }
    }
}

function main5 () {
    let array = [1, [2], [3, [4,5,6,[[7,5]]]]];
    flatten (array);
    console.log (array2);
    return 0;
}