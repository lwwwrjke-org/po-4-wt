function union() {
  let arrays = Array.from(arguments);
  let resultArr = [];

  arrays.forEach((arr) => {
    resultArr = resultArr.concat(arr);
  });

  let union = new Set(resultArr);

  return [...union];
}

alert(union([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9], [1, 3, 4, 10, 20, 30, 6]));
