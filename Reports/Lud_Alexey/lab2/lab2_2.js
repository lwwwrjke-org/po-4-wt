function lab2_2(){
while(1){
var s = prompt("Введите количество квартир(1-20):");
s = Number(s);
if(s < 1 || s > 20 || isNaN(s)){
alert("Неверные данные");
throw "Error";
}	
var q = prompt("Введите количество этажей(1-25):");
q = Number(q);
if(q < 1 || q > 25 || isNaN(q)){
	alert("Неверные данные");
	throw "Error";
}
var p = prompt("Введите количество подъездов(1-10):");
p = Number(p);
if(p < 1 || p > 10 || isNaN(p)){
	alert("Неверные данные");
	throw "Error";
}
var n = s * q * p; // все квартиры
var k = prompt("Введите номер квартиры(1-"+n+"):");
k = Number(k);
if(k < 1 || k > n || isNaN(k)){
	alert("Неверные данные");
	throw "Error";
}
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