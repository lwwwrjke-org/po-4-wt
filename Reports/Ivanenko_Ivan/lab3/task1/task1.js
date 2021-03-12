function isNumber(input) {
  if (!isNaN(input)) {
    return true;
  } else {
    return false;
  }
}

function range(start, end, step = 1) {

  let arr = [];

  if(step > 0) {
    for(let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if(step  < 0) {
    for(let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else if(step == 0) {
    alert("Step can not be 0");
    throw new Error();
  } else{
    alert("Sth went wrong..");
    throw new Error();
  }

  return arr;
}

alert(range(1, 10, 3));
alert(range(2, 5));
alert(range(12, 6, -2));
