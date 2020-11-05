// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

function Car(pr, model, year, speed){
	return {pr, model,year,speed,
	}
}
let bmw = new Car('bmw','X5',2012,100);
function info(car){
	for(let key in car){
		document.write(key +': ',car[key] + '<br>')
	}
}
function dis(car,dist){
			let plus_count = 0;
			let count = dist/car.speed;
			if (count > 4){
				plus_count = parseInt(count / 4);
			}
			return count + plus_count;
}
info(bmw);
document.write('Преодоления переданного расстояния со средней скоростью '+ dis(bmw,400) + ' часа ');

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна- менатель дроби, и следующие функции для работы с этим объ- ектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

function Fraction(numerator, denominator){
	return {
		numerator : numerator,
		denominator : denominator
	}
}
let firstNumb = Fraction(20,100);
let secondNumb = Fraction(5,10);

function Suma(obj_1,obj_2){
	let resultNumerator = obj_1.numerator + obj_2.numerator;
	let resultDenominator = obj_1.denominator + obj_2.denominator;
	alert(resultNumerator + '/' + resultDenominator + ' сложение');
}
Suma(firstNumb,secondNumb);

function Subtraction(obj_1,obj_2){
	let resultNumerator = obj_1.numerator - obj_2.numerator;
	let resultDenominator = obj_1.denominator - obj_2.denominator;
	alert(resultNumerator + '/' + resultDenominator + ' вычитание');
}
Subtraction(firstNumb,secondNumb);

function multiFraction(obj_1,obj_2){
	let resultNumerator = obj_1.numerator * obj_2.numerator;
	let resultDenominator = obj_1.denominator * obj_2.denominator;
	alert(resultNumerator + '/' + resultDenominator + ' умножение');
}
multiFraction(firstNumb,secondNumb);

function Division(obj_1,obj_2){
	let resultNumerator = obj_1.numerator / obj_2.numerator;
	let resultDenominator = obj_1.denominator / obj_2.denominator;
	alert(resultNumerator + '/' + resultDenominator + ' деление');
}
Division(firstNumb,secondNumb);

function Reductions(obj_1){
	let num1 = obj_1.numerator;
	let num2 = obj_1.denominator;
	let st; // кінцевий діапазон
	num1<num2?st=num1:st=num2;// st = найменшому числу
	let i=st;
	while(i<=st) {
	if(num1%i == 0 && num2%i == 0){
					break;
		}
		i--;
	}
	alert((num1 /= i) + '/' + (num2 /= i) + ' сокращение');
}
Reductions(firstNumb);

// Задание 3
// Создать объект, описывающий время (часы, минуты, секун- ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let clock = document.querySelector('#one');
let second = document.querySelector('#two');
let minute = document.querySelector('#three');
let hours = document.querySelector('#four');
	
let time = new Date();

		function Time(h,m,s){
			return {
				'h' : time.getHours(),
				'm' : time.getMinutes(),
				's' : time.getSeconds(),
		getClock : function (){
			clock.textContent = this.h + ':' + this.m + ':' + this.s;;
		},
		getPlusSecond : function(){
			let plusSec = +prompt('enter plus second');
			if ((plusSec + this.s)<59){
				this.s += plusSec;
				second.textContent = this.h + ':' + this.m + ':' + this.s;
			}
			else if ((plusSec + this.s) > 60){
				this.s = (plusSec + this.s)%60;
				this.m += Math.round(plusSec/60); 
				if (this.m > 60){
					this.h += Math.round(this.m/60);
					if (this.h > 24){
						this.h %= 24;
						}
					this.m %=60;
				}
			}
			second.textContent = this.h + ':' + this.m + ':' + this.s;
		},
		getPlusMinute: function(){
			let plusMin = +prompt('enter plus minute');
			if((plusMin + this.m) < 60){
				this.m += plusMin;
				minute.textContent = this.h + ':' + this.m + ':' + this.s;
			}
			else if ((plusMin + this.m) > 60){
				this.m = (plusMin + this.m)%60;
				this.h += Math.round(plusMin/60);
					if (this.h > 24){
						this.h %= 24;
					}
			}
			minute.textContent = this.h + ':' + this.m + ':' + this.s;
		},
		getPlushours : function(){
			let plusHours = +prompt('enter plus hours');
				if((plusHours + this.h) < 24){
				this.h += plusHours;
				hours.textContent = this.h + ':' + this.m + ':' + this.s;
			}
			else{
			this.h = (plusHours + this.h)%24;
			hours.textContent = this.h + ':' + this.m + ':' + this.s;
			}
		}

	}
}
let clockScreens = new Time;
clockScreens.getClock();

let plusSecond = new Time;
plusSecond.getPlusSecond();

let plusMinute = new Time ;
plusMinute.getPlusMinute();

let plusHours = new Time;
plusHours.getPlushours();



















