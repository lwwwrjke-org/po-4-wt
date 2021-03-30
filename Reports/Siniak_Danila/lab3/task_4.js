function TASK_4() {
  function union() {
      let arrRows = [];
      arrRows = new Set(arrRows.concat.apply(arrRows, arguments));
      return [...arrRows];
  }

  a = [1, 2, 2, 3];
  b = [101, 2, 1, 10];
  c = [2, 1];
  alert(union(a,b,c));
} 