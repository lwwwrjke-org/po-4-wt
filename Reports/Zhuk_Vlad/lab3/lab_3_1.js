function lab_3_1(){
while(1){

function range(start, end, step) {
  if (step == null) step = 1;
  var range = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step)
      range.push(i);
  } else {
    for (let i = start; i >= end; i += step)
      range.push(i);
  }
  return range;
}

var start = prompt("Введите начало диапазона: "); var st = Number(start);
if(isNaN(start)){ alert("Введены неверные данные"); throw "Error"; }

var end = prompt("Введите конец диапазона: "); var e = Number(end);
if(isNaN(end)){ alert("Введени неверные данные"); throw "Error"; }

var step = prompt("Введите шаг: "); var s = Number(step);
if(isNaN(step)){ alert("Введены еверные данные"); throw "Error"; }

alert("range(" + st + "," + e + "," + s + ")= " + "[" + range(st, e, s) + "]");
}
} 