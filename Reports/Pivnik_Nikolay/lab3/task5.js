function flatten(array) {
  const input = [...array];
  const flattened = [];
  let nextElement;
  while(input.length) {
    nextElement = input.pop();
    if(Array.isArray(nextElement)) {
      input.push(...nextElement);
    } else {
      flattened.push(nextElement);
    }
  }

  return flattened.reverse();
}


console.log(flatten([1, 2, 3, [4, 5, 6, 7], [8, 9, [10, 11]]]))
