function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
var i = prompt("Введите параметр i:");
if(i < 1 || isNaN(i)){
alert("Неверные данные");
throw "Error";
}
alert("fib("+i+")= "+fib(i));