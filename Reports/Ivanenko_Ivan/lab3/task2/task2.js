function compare(el_1, el_2) {
    return el_1 - el_2;
}

function qsort(arr, comparator = compare) {
  // Base case
  if(arr.length < 2) {
    return arr;
  }

  // Last element
  const pivot = arr[arr.length - 1];
  // Elements that less than pivot
  const left = [];
  // Elements that greater or equal to the pivot
  const right = [];
  for(const el of arr.slice(0, arr.length - 1)) {
    comparator(el, pivot) < 0 ? left.push(el) : right.push(el);
  }

  return [...qsort(left), pivot, ...qsort(right)];
}

console.log(qsort([3, 1, 4, 66, 23]));
