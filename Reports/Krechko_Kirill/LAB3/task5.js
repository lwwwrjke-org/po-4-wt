function flatten(array) {

  flattened = [];
  
  let nextElement;
  while(array.length) {
    nextElement = array.pop();
    if(Array.isArray(nextElement)) {    //проверка, является ли элемент массивом
      array.push(...nextElement);
    } else {
      flattened.push(nextElement);
    }
  }

  return flattened.reverse();
}

console.log(flatten([1, [2], [3, [4]]]));
