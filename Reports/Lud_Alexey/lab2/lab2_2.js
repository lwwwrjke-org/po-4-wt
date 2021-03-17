function lab2_2(){
while(1){
var n = prompt("Введите количество квартир в доме(1-20):");
n = Number.parseInt(n);
if(n < 1 || n > 20 || isNaN(n)){
alert("Неверные данные");
throw "Error";
}	
var q = prompt("Введите количество этажей в подъездах(1-25):");
q = Number.parseInt(q);
if(q < 1 || q > 25 || isNaN(q)){
	alert("Неверные данные");
	throw "Error";
}
var p = prompt("Введите количество подъездов(1-10):");
p = Number.parseInt(p);
if(p < 1 || p > 10 || isNaN(p)){
	alert("Неверные данные");
	throw "Error";
}
var k = prompt("Введите номер квартиры(1-"+n+"):");
k = Number.parseInt(k);
if(k < 1 || k > n || isNaN(k)){
	alert("Неверные данные");
	throw "Error";
}
var s = n/(p*q);// количество квартир на этаже
s=Math.ceil(s);
var sp = n/p;// количество квартир в одном подъезде
sp=Math.ceil(sp);
var np = 1+(k-1)/sp;//в каком подъезде эта квартира
np=Math.floor(np);
var ne = 1+((k-1)%sp)/s;//на каком этаже эта квартира
ne=Math.floor(ne);
alert(
n+' квартир в доме\n'+
q+' этажа(ей) в подъезде(дах)\n'+
p+' подъезда(ов)\n'+
k+' номер квартиры\n'+
s+' квартир(ы) на этаже\n'+
sp+' квартир в подъзде\n'+
ne+' искомый этаж\n'+
np+' искомый подъезд');
}
}