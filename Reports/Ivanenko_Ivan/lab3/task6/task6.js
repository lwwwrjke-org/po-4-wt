function deleteTriples(obj) {
  let val = Object.values(obj);
  let map = new Map();
  val.forEach((item, i) => {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  });

  let arr = [];
  map.forEach((item, i) => {
    if(item < 3) {
      arr.push(i);
    }
  });

  return arr;
}

let arr = [1,1,2,3,1,4,4,5,7,6,4,7,7];
let str = "aaabbcbddfdg";
console.log(deleteTriples(arr));
console.log(deleteTriples(str));
