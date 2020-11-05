function Car(name, year){
	this.name = name;
	this.year = year;
}
// Car.prototype.

Car.prototype.calculeteAge = function(){
	return new Date().getFullYear() - this.year;
}
Car.prototype.color = 'black';


let audi = new Car('Audi', 2015);
audi.color = 'red';
let bmw = new Car('BMW',2000);
console.log(audi);
console.log(bmw);


function Moto(name,model,year,manufacturer,quantityWheel,color,distance,averageSpeed,run){
	this.name = name;
	this.model = model;
	this.year = year;
	this.manufacturer = manufacturer;
	this.quantityWheel = quantityWheel;
	this.color = color;
	this.distance = distance;
	this.averageSpeed = averageSpeed;
	this.run = run;
}
let yamaha = new Moto ('yamaha', 'R1',2012, 'Japan', 2, 'green', 700, 150, 130000);
console.log(yamaha.run);

Moto.prototype.calculeteRun = function(){
	return this.run/(new Date().getFullYear() - this.year);
}
console.log('За рік проїхав - ' + yamaha.calculeteRun());

console.log(yamaha);

Moto.prototype.Screen = function(){
	for (key in yamaha){
		if (yamaha.hasOwnProperty(key)){
		document.write(key + ': ', yamaha[key] + '<br>');
		}
	}
}
yamaha.Screen();