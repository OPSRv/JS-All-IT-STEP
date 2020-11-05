// document.body.style.backgroundColor = "yellow";
// типи даниих
// 	number - числовий;
// 	string - строка;
// 	boolean - булевий;
// 	null - 
// 	undefined

// const countDays = 21;
// alert(typeof(countDays));
// alert (countDays);

// let firstName = "OPS_Rv";
// alert (firstName); 
// let name;

// var age = 7;
// alert (age);

// alert("Hello");
// confirm("Hello"); //повертає true і false
// let f = confirm("Hello");
// f==true?document.body.style.background = "yellow" = "green":document.body.style.background = "red";

// let name = prompt("enter Name","ops");
// console.log(name);
// let one,to;
// one = parseInt(prompt("one"));
// to = parseFloat(prompt("to"));

// alert(one+" + "+to+" = "+(one+to));

// let a = 25;
// let b = a%2;
// alert(b);



// let a = parseInt(prompt("enter a"));
// console.log("1_____Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.",(a**2));

// let c = parseInt(prompt("enter c"));
// let d = parseInt(prompt("enter d"));
// console.log("2_____Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.",(c+d)/2);

// let areaSq = parseInt(prompt("enter areaSq"));
//  console.log("3_____Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.",(areaSq**2));

// const miles = 0.621371;
// let kilometers = prompt("enter kilometers");
// let convert = kilometers*miles;
//  console.log("4_____Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.",convert);

// one = parseInt(prompt("one"));
// two = parseFloat(prompt("to"));
//  console.log("5_____Реализуйте калькулятор. Пользователь вводит два числа,а программа выводит результаты действий + - * / между этими числами.");
//  console.log(one+" + "+two+" = "+(one+two));
//  console.log(one+" - "+two+" = "+(one-two));
//  console.log(one+" / "+two+" = "+(one/two));
// console.log(one+" * "+two+" = "+(one*two));

// //////1
// console.log("1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».");
// let name = prompt("What is your name ?");
// alert("«Hello, " + name + "!»");
// //////2
// console.log("2. Запросите у пользователя год его рождения, посчитайте,сколько ему лет и выведите результат. Текущий год укажите в коде как константу.");
// let yearBirth = prompt("What is your year of birth ?");
// const thisYear = 2020;
// let age = thisYear - yearBirth;
// alert("You are "+age+" years old");
// //////3
// console.log("3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.");
// let sideLength = prompt("What is the length of the side of the square ?");
// let squarePerimeter = sideLength*4;
// alert("Square perimeter = " + squarePerimeter);
// //////4
// console.log("4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.");
// const pi = 3.1415926535897932384626433832795;
// let circleRadius = prompt("What is the radius of the circle?");
// let circleArea = pi*circleRadius**2;
// alert("Circle area = " + circleArea.toFixed(2));
// //////5
// console.log("5. Запросите у пользователя расстояние в км между двумяmгородами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.");
// let distanceCities = prompt("What is the distance between cities ?");
// let travelTime = prompt("What time is in transit ?");
// let speed = distanceCities/travelTime;
// alert("Speed required " + speed.toFixed(0)+ " km/h " +" Do not exceed the speed !!!");


///унарний оператор має одру операнду
// a++ = 2 ++a = 3 , b - -; 

// let a = 2;
// let b = 3;
// // a = a+1; a++
// console.log(b+(++a));
// //бінарний дві операнди
// 	let a = 2;
// 	let b = 3;
// 	console.log(a+b);
//тернарний 
//a?b:c;
// if 
//оператори порівняння
//	(==) - перевірка чи одне число дорівнює іншому чи текст
// (>)(<) - одне число більше/менше іншого
// (>=)(<=) - одне число більше/менше чи дорівнює
// (!=) - не дорівнює

//логічний оператор if

/*
let year = 2020;
let yearPersone = +prompt("enter year");
let age = year - yearPersone;
//якщо вік більше 18 виводимо => of в іншому випадку - error

if(yearPersone == null) {
	alert("cancel")
}
else if (yearPersone==""){
alert("enter year");
}
if(age >= 18){
	alert("ok");
}
else if(age < 18) {
	alert("you no 18");
}
else {
	alert("error");
}
*/

// && - і
// || - або

// let login,password;

// login = prompt("Хто прийшов");
// password = prompt("Пароль ?");
// 	if (login.toLowerCase() == "адмін" && password == "ШАГ") {
// 		alert("Ласкаво просимо");
// 		document.title = login;
// 	}
// else {
// 	alert("Логін або пароль не правильний");
// }

// if(login == null){
// 	alert("Вхід скасовано");
// } 
// else if(login.toLowerCase() == "адмін"){
// 	password = prompt("Пароль ?");
// 	if(password == null){
// 		alert("Вхід скасовано");
// 	}
// 	else if (password == "ШАГ"){
// 		alert("Ласкаво просимо");
// 	}
// 	else{
// 		alert("Пароль не правильний")
// 	}
// }
// else {
// 	alert("Я Вас не знаю")
// }


// Object.is(value1, value2); метод визначає, чи є два значення однаковим значенням.
// равенство ("двойное равно") использует ==,
// строгое равенство (или "тройное равно" или "идентично") использует ===,
// и Object.is (новшество из ECMAScript 6).

/*
Задача 1
Користувач вводить номер дня
Виводимо:
якщо 1-Понеділок
якщо 2-Вівторок
якщо 3-Середа
якщо 4-Четвер
якщо 5-П&#39;ятниця
якщо 6 -Субота
якщо 7-Неділя
*/
/*
let numberDay = +prompt("Номер дня");
	if (numberDay === 1) {
		alert("Понеділок");
	}
	else if (numberDay == 2){
		alert("Вівторок");
	}
	else if (numberDay == 3){
			alert("Середа");
		}
	else if (numberDay == 4){
			alert("Четвер");
		}
	else if (numberDay == 5){
			alert("П&#39;ятниця");
		}
	else if (numberDay == 6){
			alert("Субота");
		}
	else if (numberDay == 7){
			alert("Неділя");
		}
	else{
		alert("error");
	}
*/

// Задача 2
// Визначити чи введене користувачем число, належить до діапазону[0; 20;]
// let number = +prompt("Введіть а");
// 	if (number>= 0 && number<=20) {
// 		document.write("Число входить в діапазон 0 - 20");
// 	}
// 	else if (number < 0 || number > 20) {
// 		document.write("Число не входить в діапазон 0 - 20");
// 	}

// Задача 3
// Користувач вводить свою температуру.
// Якщо вона менша 20 градусів або більше 46,то alert (&quot;Ви труп&quot;).
// Якщо від 20 - 27 градусів - ви у комі, 
// від 27 до 36 або 37 до 42, ви хворі, 
// якщо від 36 до 37 - ви здорові, 
//якщо від 42 до 46 - ви втратили свідомість.
// Людина вводить дробові числа 36,6.

// let temperature = parseFloat(+prompt("Введіть температуру"));

// 	if (temperature < 20 || temperature > 46) {
// 		alert("Ви труп");
// 	}
// 	else if (temperature > 20 && temperature < 27){
// 		alert("Ви у комі");
// 	}
// 	else if ((temperature >=27 && temperature < 36) || (temperature > 37 && temperature < 42)) {
// 		alert("Ви хворі");
// 	}
// 	else if (temperature >= 36 && temperature <= 37){
// 		alert("Ви у здорові");
// 	}
// 	else if (temperature >= 42 && temperature <=46)
// 		alert("Ви втратили свідомість")

// 	else{
// 		alert("error");
// 	}

// console.log(temperature);


// Задача 4
// Людина вводить число 1 або 2.
// якщо 1 - то переводимо гривні в долари
// якщо 2 - то переводимо долари в гривні.
// В першому випадку виводимо prompt - введіть гривні, наступний prompt - введіть курс,
// виводимо в alert долари.
// В другому, навпаки - людина вводить долари, тоді курс, а в alert кількість гривнів.

// let convert = parseFloat(+prompt("Конвертувати гривні в долари - 1 Конвертувати долари в гривні - 2"));
// let uah, usd, val;

// 	if (convert === 1) {
// 		uah = parseFloat(+prompt("Введіть гривні"));
// 		val = uah/28;
// 	}
// 	else if (convert === 2){
// 		usd = parseFloat(+prompt("Введіть долари"));
// 	}
// 	else if (convert === 2) {

// 	}
// 	else {

// 	}


// 5. Запросить координаты точки (x, y) и определить номер
// четверти, в которую попала эта точка. Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат. 

// 2 | 1
// ______
// 3 | 4

// let x = parseFloat(+prompt("Введіть координати по осі X "));
// let y = parseFloat(+prompt("Введіть координати по осі Y "));
// 	if ( x > 0 && y > 0) {
// 		alert("1-ша четверть");
// 	}
// 	else if ( x < 0 && y > 0) {
// 		alert("2-га четверть");
// 	}
// 	else if ( x < 0 && y < 0) {
// 		alert("3-тя четверть");
// 	}
// 	else if ( x > 0 && y < 0) {
// 		alert("4-та четверть");
// 	}
// 	else if ( x == 0 && y == 0) {
// 		alert("Початок вісі координат");
// 	}
// 		else if ( x !== 0 && y == 0) {
// 		alert("Точка лежить на вісі X ");
// 	}
// 	else if ( x == 0 && y !== 0) {
// 		alert("Точка лежить на вісі Y ");
// 	}
// 		else{
// 		alert("Некоректне введення");
// 	}


// 3. Запросить у пользователя число и вывести его модуль
// (|7| = 7, |-7| = 7).
// let modul = parseFloat(+prompt("Введіть число"));
// 	if (modul > 0){
// 		alert("Модуль числа " +modul+ " = " + modul * 1);
// 	}
// 	else if (modul < 0) {
// 		alert("Модуль числа " +modul+ " = " +modul * -1)
// 	}
// 	else if (modul == 0) {
// 		alert("Модуль числа " +modul+ " = " + modul);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}


// 4. Запросить у пользователя время (часы, минуты, секунды)
// и проверить корректность введенных данных.

// let hour, minute, second;
// 	hour = prompt("Введіть години");
// 	minute = prompt("Введіть хвилини");
// 	second = prompt("Введіть секунди");

// 	if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
// 		alert("Час введено правльно " + hour+":"+minute+":"+second);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// 2. Запросить у пользователя его возраст и проверить кор-
// ректность введенных данных (0–120 лет).
// let age = prompt("Введіть вік");
// 	if (age >= 0 && age <= 120) {
// 		alert("Вік введено правильно - "+ age);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// 1. Запросить у пользователя число и определить, оно поло-
// жительное, отрицательное или ноль.
// let number = parseFloat(+prompt("Введіть число"));
// 	if (number == 0) {
// 		alert("Число рівне нулю");
// 	}
// 	else if (number > 0) {
// 		alert(number + ": додатне число ");
// 	}
// 		else if (number < 0) {
// 		alert(number + ": від'ємне число");
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}



// // 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
// let number = parseFloat(+prompt("Введіть число"));
// 	if (number == 0) {
// 		alert("Число рівне нулю");
// 	}
// 	else if (number > 0) {
// 		alert(number + ": додатне число ");
// 	}
// 		else if (number < 0) {
// 		alert(number + ": від'ємне число");
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// // 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
// let age = prompt("Введіть вік");
// 	if (age >= 0 && age <= 120) {
// 		alert("Вік введено правильно - "+ age);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// // 3. Запросить у пользователя число и вывести его модуль
// // (|7| = 7, |-7| = 7).
// let modul = parseFloat(+prompt("Введіть число"));
// 	if (modul > 0){
// 		alert("Модуль числа " +modul+ " = " + modul * 1);
// 	}
// 	else if (modul < 0) {
// 		alert("Модуль числа " +modul+ " = " +modul * -1)
// 	}
// 	else if (modul == 0) {
// 		alert("Модуль числа " +modul+ " = " + modul);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// // 4. Запросить у пользователя время (часы, минуты, секунды)и проверить корректность введенных данных.
// let hour, minute, second;
// 	hour = prompt("Введіть години");
// 	minute = prompt("Введіть хвилини");
// 	second = prompt("Введіть секунди");

// 	if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
// 		alert("Час введено правльно " + hour+":"+minute+":"+second);
// 	}
// 	else {
// 		alert("Некоректне введення");
// 	}

// // 5. Запросить координаты точки (x, y) и определить номер
// // четверти, в которую попала эта точка. Необходимо учесть
// // случаи попадания точки на оси X или Y или в начало
// // координат. 
// let x = parseFloat(+prompt("Введіть координати по осі X "));
// let y = parseFloat(+prompt("Введіть координати по осі Y "));
// 	if ( x > 0 && y > 0) {
// 		alert("1-ша четверть");
// 	}
// 	else if ( x < 0 && y > 0) {
// 		alert("2-га четверть");
// 	}
// 	else if ( x < 0 && y < 0) {
// 		alert("3-тя четверть");
// 	}
// 	else if ( x > 0 && y < 0) {
// 		alert("4-та четверть");
// 	}
// 	else if ( x == 0 && y == 0) {
// 		alert("Початок вісі координат");
// 	}
// 		else if ( x !== 0 && y == 0) {
// 		alert("Точка лежить на вісі X ");
// 	}
// 	else if ( x == 0 && y !== 0) {
// 		alert("Точка лежить на вісі Y ");
// 	}
// 		else{
// 		alert("Некоректне введення");
// 	}



//// Умовний оператор SWITCH
// case - перевіряє на сувору рівність 
// let day = +prompt("Введіть день");
// 	switch(day){
// 		case 1:{ // if(day === 1)
// 			console.log("Пн"); break;
// 		}  
// 		case 2:{
// 			console.log("Вт");break;
// 		}
// 		case 3:{
// 			console.log("Ср");break;
// 		}
// 		case 4:{
// 			console.log("Чт");break;
// 		}  
// 		case 5:{
// 			console.log("Пт");break;
// 		}  
// 		case 6:{
// 			console.log("Сб");break;
// 		}  
// 		case 7:{
// 			console.log("Нд");break;
// 		}      
// 		default:{
// 			alert("error");
// 		}
// 	} 
//номер місяця
// let number = +prompt("Введіть номер місяця");
// 		switch(number){
// 		case 1: case 2: case 12:{
// 			console.log("Зима"); break;
// 		}  
// 		case 2:{
// 			console.log("Лютий");break;
// 		}
// 		case 3:{
// 			console.log("Березень");break;
// 		}
// 		case 4:{
// 			console.log("Квітень");break;
// 		}  
// 		case 5:{
// 			console.log("Травень");break;
// 		}  
// 		case 6:{
// 			console.log("Червень");break;
// 		}  
// 		case 7:{
// 			console.log("Липень");break;
// 		}
// 		case 8:{
// 			console.log("Серпень");break;
// 		}   
// 		case 9:{
// 			console.log("Вересень");break;
// 		}   
// 		case 10:{
// 			console.log("Жовтень");break;
// 		}   
// 		case 11:{
// 			console.log("Листопад");break;
// 		}   
// 		case 12:{
// 			console.log("Грудень");break;
// 		}         
// 		default:{
// 			alert("error");
// 		}
// 	} 

// Користувач ввдоти рік народження вивести на сторінку назву знака гороскопу під яким народився 
// дані від 0 до безкінечності

// let year = +prompt("Введіть рік народження");
// let name;
// 	switch (year % 12) {
// 	// document.write("Коза");
// 	// document.write("<img src = ''>");
// 	// document.body.style.backgroundImage = 'url()';

// 	case 0: {
// 		document.write("Мавпа");
// 		document.body.style.backgroundImage = 'url(https://lh3.googleusercontent.com/proxy/3tGNzX6vn1mMHl5LZbPmckRzGNtGTYlOZpt5P_oX5mtgPR42CHfXkqS0tRNFpQ7aD906gT-tl_XZs_ouumd7TzZtu36bI0ZhVm8)';
// 			document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 1: {
// 		document.write("Півень");
// 		document.body.style.backgroundImage = 'url(https://media.pogliad.ua/news/article/2017/01/27/323846/OvE1NEK31bx2VHmhqzdx.r575x340.jpg)';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 		break;
// 	}  
// 		case 2: {
// 		console.log("Собака");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 3: {
// 		console.log("Свиня");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 4: {
// 		console.log("Криса");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	}
// 		case 5: {
// 		console.log("Бик");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 6: {
// 		console.log("Тигр");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 7: {
// 		console.log("Кролик");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 8: {
// 		console.log("Дракон");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 9: {
// 		console.log("Змія");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	}
// 		case 10: {
// 		console.log("Кінь");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
// 		case 11: {
// 		console.log("Коза");break;
// 		document.body.style.backgroundImage = 'url()';
// 		document.body.style.backgroundRepeat = "no-repeat";
// 	} 
 // }



														// //Тернарні оператори 
// условие ? выражение1 : выражение2
// Параметры
// условие
// Выражение, принимающее значение true или false.
// let number = +prompt("enter num1");
// number % 5 == 0?console.log(" a кратне 5"):console.log(" а не кратне 5");


////// ЦИКЛИ 
// let n = parseInt(prompt("enter number"));
// for (let i = 1; i <= n; i++ ){
// 	document.write( i + "<hr>");
// }


// let n = parseInt(prompt("enter number"));
// for (let i = 1; i <= 100; i++) {
// 	if (i%n==0) {
// 	document.write( i + "<hr>");}
// }

// Запитати користувача 10 чисел на екран вивести кількість відємних чисел 
// та кількість додатних та кількість 0


// let number;

// for(let i = 0; i>10; i++) 
// 	number = +prompt("enter num1");
// 	if (

// 	}
// }

//ДОМАШНЯ РОБОТА 


							// // 1.Запросить у пользователя его возраст и определить, кем он
							// // является: ребенком (0–2), подростком (12–18), взрослым
							// // (18_60) или пенсионером (60– ...).

// let age = +prompt("Введіть ваш вік");
// 	if (age >= 0 &&  age <= 2){
// 		document.write("Дитина");
// 	}
// 	else if (age >= 12 && age < 18){
// 		document.write("Підліток");
// 	}
// 		else if (age >= 18 &&  age < 60){
// 		document.write("Дорослий");
// 	}
// 		else if (age >= 60){
// 		document.write("Пенсіонер");
// 	}
// 	else{
// 		document.write("щось пішло не так;)");
// 	}

							// // 2. Запросить у пользователя число от 0 до 9 и вывести ему
							// // спецсимвол, который расположен на этой клавише (1–!,
							// // 2–@, 3–# и т. д).

// let number = +prompt("Введіть число від 0 до 9");
// switch(number){
// 		case 0: {
// 			document.write(")"); break;
// 		}  
// 		case 1:{
// 			document.write("!");break;
// 		}
// 		case 2:{
// 			document.write("@");break;
// 		}
// 		case 3:{
// 			document.write("#");break;
// 		}  
// 		case 4:{
// 			document.write("$");break;
// 		}  
// 		case 5:{
// 			document.write("%");break;
// 		}  
// 		case 6:{
// 			document.write("^");break;
// 		}
// 		case 7:{
// 			document.write("&");break;
// 		}   
// 		case 8:{
// 			document.write("*");break;
// 		}   
// 		case 9:{
// 			document.write(")");break;
// 		}          
// 		default:{
// 			alert("error");
// 		}
// 	} 

							// // 3.Запросить у пользователя трехзначное и число и проверить,
							// // есть ли в нем одинаковые цифры.

// let num = parseInt(prompt("Введіть 3-х значне число(від 100 до 999)",''));
// let a,b,c,d;
// 	a = Math.floor(num/100);
// 	// console.log(a + " перевірка");
// 	b = (num%100);
// 	d = Math.floor(b/10);
// 	// console.log(d + " перевірка");
// 	c = num%10;
// 	// console.log(c + " перевірка"); 
// 	if (a == d || a == c || d == c ) {
// 		document.write("У введеному числі є однакові цифри");
// 	}
// 		else{
// 		document.write("У введеному числі немає однакових цифр або число введено не коректно");
// 	}


							// // 4.Запросить у пользователя год и проверить, високосный он
							// // или нет. Високосный год либо кратен 400, либо кратен 4 и
							// // при этом не кратен 100.

// let year = parseInt(+prompt("Введіть рік щоб дізнатися чи він високосний"));
// (((year % 400 === 0)||(year % 4 === 0))&&((year%100!== 0)&&(year>0)))?document.write("Введений рік є високосним"):document.write("Введений рік не є високосним, або введено некоректні дані");


							// // 5. Запросить у пользователя пятиразрядное число и опреде-
							// // лить, является ли оно палиндромом.

// let number = parseInt(+prompt("Введіть п'ятирозрядне число"));
// 			let a = Math.floor(number/10000);
// 			let b = Math.floor(number/1000)%10;
// 			let c = Math.floor(number%100);
// 			let e = Math.floor(c/10);
// 			let d = Math.floor(number%100)%10;
// 		if((number > 9999 && number <= 99999) && (a == d && b == e)) {
// 		document.write("Введене число є паліндром");
// 		}	
// 		else if ((number > 9999 && number <= 99999) && (a != d || b != e)) {
// 			document.write("Введене число НЕ є паліндром");
// 		}
// 		else {
// 			alert("Некоректне введення");
// 		}

	
							// // 6. Написать конвертор валют. Пользователь вводит количе-
							// // ство USD, выбирает, в какую валюту хочет перевести: EUR,
							// // UAN или AZN, и получает в ответ соответствующую сумму.

// let usd = parseFloat(+prompt("Введіть кількість USD, які потрібно перевести"));
// let currency = prompt("Введіть в яку валюту необхідно перевести EUR, UAH AZN");
// 	if (usd > 0) {
// 		switch(currency){
// 			case 'EUR':{
// 				document.write(usd +" USD рівні "+ Math.round(usd/1.088)+" EUR");
// 				break; 
// 			}
// 			 case 'UAH':{
// 				document.write(usd +" USD рівні "+ Math.round(usd*26.68)+" UAH");
// 				break; 
// 			}
// 			case 'AZN':{
// 				document.write(usd +" USD рівні "+ Math.round(usd*1.7)+" AZN");
// 				break; 
// 			}
// 			default:{
// 				alert("Щось пішло не так)");
// 		}
// 	} 
// }
// else {
// 	alert("Щось пішло не так)");
// }


							// // 7.Запросить у пользователя сумму покупки и вывести сумму
							// // к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
							// // до 500 – 5%, от 500 и выше – 7%.

// let sum = parseFloat(+prompt("Введіть суму покупки"));
// 	let threePercent = sum * 0.03;
// 	let fivePercent = sum * 0.05;
// 	let sevenPercent = sum * 0.07; 
// 	if (sum < 200) {
// 		document.write("Сума покупки становить - " + sum +" гривень");
// 	}
// 	else if (sum >= 200 && sum < 300) {
// 		document.write("Сума покупки зі знижкою 3% становить - " + (sum - threePercent) + " гривень");
// 	}
// 	else if (sum >= 300 && sum < 500) {
// 		document.write("Сума покупки зі знижкою 5% становить - " + (sum - fivePercent) + " гривень");
// 	}
// 	else if (sum >= 500) {
// 		document.write("Сума покупки зі знижкою 7% становить - " + (sum - sevenPercent) + " гривень");
// 	}
// 	else {
// 		alert("error");
// 	}

							// // 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// let circumFerence = parseFloat(+prompt("Введіть довжину кола"));
// let perimeterSquare = parseFloat(+prompt("Периметр квадрата"));
// ((circumFerence/Math.PI)<=(perimeterSquare/4))?document.write("Поміщається"):document.write("Не поміщається");


							// // 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// let scores = 0;
// 	console.log("В якому році був створений W3C")
// 	console.log("1) березень 1998 року");
// 	console.log("2) січень 2005 року");
// 	console.log("3) квінень 2020 року");
// let oneQuestion = +prompt("В якому році був створений W3C");
// 	switch(oneQuestion) {
// 		case 1: {
// 			scores += 2;
// 			break;
// 		}
// 		case 2: case 3: {
// 			alert("Неправильна відповідь");
// 			break;
// 		}
// 		default:{
// 			alert("error");
// 		}
// 	}
// 	console.log("Коли зявився JavaScript ?")
// 	console.log("1) 1997");
// 	console.log("2) 1995");
// 	console.log("3) 2010");
// 	let twoQuestions = +prompt("Коли зявився JavaScript ?");
// switch(twoQuestions) {
// 		case 2: {
// 			scores += 2;
// 			break;
// 		}
// 		case 1: case 2: {
// 			alert("Неправильна відповідь");
// 			break;
// 		}
// 		default:{
// 			alert("error");
// 		}
// 	}
// 	console.log("CSS - це ... ")
// 	console.log("1) Мова розмітки");
// 	console.log("2) Мова програмування");
// 	console.log("3) Каскадті таблиці стилів");
// 	let threeQuestions = +prompt("CSS - це ... ");
// switch(threeQuestions) {
// 		case 3: {
// 			scores += 2;
// 			break;
// 		}
// 		case 1: case 2: {
// 			alert("Неправильна відповідь");
// 			break;
// 		}
// 		default:{
// 			alert("error");
// 		}
// 	}
// console.log("Набрані бали - " + scores)


							// // 10. Запросить дату (день, месяц, год) и вывести следующую
							// // за ней дату. Учтите возможность перехода на следующий
							// // месяц, год, а также високосный год.

// let day = parseInt(+prompt("Введіть день"));
// let month = parseInt(+prompt("Введіть місяць"));
// let year = parseInt(+prompt("Введіть рік"));
// 		switch(month){
// 			case 1: case 3: case 5: case 7: case 8: case 10: { 		
// 				if (day === 31) {
// 					day = day - 30;
// 				}
// 				else if(day < 31 && day >= 1){
// 					day = day + 1;
// 				}
// 				else{
// 					alert("1 - Некоректне введення");
// 				}
// 			break;
// 			}
// 			case 4: case 6: case 9: case 11: {
// 				if(day === 30){
// 					day = day - 29;
// 					month = month + 1;
// 				}
// 				else if(day < 30 && day >= 1){
// 					day = day + 1;
// 				}
// 				else{
// 					alert("2 - Некоректне введення");
// 				}
// 			break;
// 			}
// 			case 2: {
// 				if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
// 					if(day === 29){
// 					day = day - 28;
// 					month = month + 1;
// 					break;
// 					}
// 					else if(day < 29 && day >= 1){
// 					day = day + 1;
// 					break;
// 					}
// 					else{
// 						alert("3 - Некоректне введення");
// 					}
// 				}
// 				if(year % 400 != 0 && day === 28){
// 					day = day - 27;
// 					month = month + 1;
// 					break;
// 					}
// 					else if(day < 28 && day >= 1){
// 					day = day + 1;
// 					break;
// 					}
// 					else{
// 						alert("4 - Некоректне введення");
// 					}
// 			break;
// 			}
// 			case 12:{
// 				if (day === 31) {
// 					day = day - 30;
// 					year = year + 1;
// 					month = month - 11;
// 					}
// 					else if(day < 31 && day >= 1){
// 					day = day + 1;
// 					}
// 					else{
// 						alert("5 - Некоректне введення");
// 					}
// 				break;
// 			}
// 		default:{
// 			alert("error");
// 		}
// 	}
// 	document.write(day +'.'+month+'.' + year);


////// ЦИКЛИ 


// for (let i = 20; i <= 100; i++ ){
// 	if (i%3 == 0) {// кратні 3 
// 	document.write( i + "<hr>");
// 	}
// }

// let i = 1;
// while(i<=10) {
// 	document.write(i + "<br>");
// 			i++; // послідовність цикла в кінці бо і вже дорівнює 1
// } 

// 	let login;
// 	while(true) {
// 	login = prompt("enter login");
// 	if (login == "admin") {
// 		break;
// 	}
// } 
// document.write("Hello " + login);
// let login;
// do {
// 	login = prompt("enter login");
// } while(login != "admin");
// document.write("Hello " + login);

// let result;
// do{ // робити поки while != 4
// 	result = prompt("2+2 = ");
// } while(result != 4); 
// document.write("ok");


// let i = 1;
// let sum = 0;
// 	while(i <=20)  {
// 		sum += i;
// 		i++;
// 	}
// document.write(sum);






// Задания, в которых необходимо использовать WHILE.
// 1. Вывести # столько раз, сколько указал пользователь.
		// let i = 1;
		// let number = +prompt("Ведіть кількість #");
		// 	while(i <=number)  {
		// 		document.write("#");
		// 		i++;
		// 	}
// 2. Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0.
		// let i = +prompt("Ведіть число");;
		// if (i > 0) {
		// 	while(i >= 0)  {
		// 		document.write(i + "<br>");
		// 		i--;
		// 	}
		// }
		// else if(i<=0){
		// 	while (i<=0){
		// 		document.write(i + "<br>");
		// 		i++;
		// 	}
		// }
// 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
	// let number = +prompt("Ведіть число");
	// let st = +prompt("Ведіть степінь");
	// let result = 1;
	// let i = 1;
	// while(i <= st)  {
	// 	result = result * number;
	// 	i++;
	// }
	// 	document.write(number + "<sup>" + st + "</sup> =" + result);
// 4. Запросить 2 числа и найти все общие делители.
	// let num1 = prompt("Введіть число 1");
	// let num2 = prompt("Введіть число 2");
	// let st; // кінцевий діапазон

	// num1<num2?st=num1:st=num2;
	// let i=1;
	// while(i<=st) {
	// 	if(num1%i== 0 && num2%i ==0){
	// 		document.write(i + "<br>");
	// 	}
	// 	i++;
	// }




// 5. Посчитать факториал введенного пользователем числа.

// 1 = 1*1
	// 1=1*2
	// 2=2*3 = 6

// 	let numb = prompt("enter numb");
// 	let i = 1;
// 	let result = 1;
// 	while(i <= numb){
// 		result *= i;
// 		i++;
// 	}
// document.write(numb +"!"+"= " + result);


// користувач вводить 5 імен пропустити імена які складаються менше ніж 5 символів
// Оксана Дарія Олександр Іван Юра
// for (let i = 0; i < 5; i++){
// 	let name = prompt("enter name");
// 	if (name.length < 5){ 
// 		continue;
// 	}
// 		document.write(name + "<br>");
// 	}

// 5. Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.
	
// 	let num = +prompt("Введіть число");
// 	let r = true;// число є простим
// 	for (let i = 2; i < num; i++){
// 		if (num % i == 0){
// 			r = false;
// 			break;// 12 (2) - щоб не проходив цикл далі
// 		}
// 	}
// r?document.write("Просте"):document.write("Складне");
	

//// ДОМАШНЄ ЗАВДАННЯ

// 		1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let num1 = +prompt("Введіть початок діапазону");
let num2 = +prompt("Введіть кінець діапазону");
let sum = 0;
		while (num1 <= num2){
			sum += num1;
			num1++;	
		}
		document.write(sum);

	// 	// 2.Запросить 2 числа и найти только наибольший общий делитель.
	// let num1 = prompt("Введіть число 1");
	// let num2 = prompt("Введіть число 2");
	// let st; // кінцевий діапазон
	// num1<num2?st=num1:st=num2;// st = найменшому числу
	// let i=st;
	// while(i<=st) {
	// 	if(num1%i == 0 && num2%i == 0){
	// 		document.write("НОД чисел "+num1+" та "+num2+" - "+i + "<br>");
	// 				break;
	// 	}
	// 	i--;
	// }

// 3.Запросить у пользователя число и вывести все делители этого числа
// let num = +prompt("Введіть число");
// let i = 0;
// 	while(i<=num){
// 		if (num%i == 0){
// 			document.write(i+"<br>");
// 		}
// 	i++;
// 	}

// 4.Определить количество цифр в введенном числе.

// let num = +prompt("Введіть число");
// let i = 0;
// 	while (num >= 1){
// 		num = num/10;
// 		i++;
// 	}
// 	document.write(i+"<br>");

// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел 
// положительных 
// отрицательных и 
// четных и 
// нечетных. 

// let i = 1;
// let positiveNumber = 0;
// let negativeNumber = 0;
// let evenNumber = 0;
// let oddNumber = 0;
// let zero = 0;
// while(i <=5){
// 		let num = +prompt("Введіть 10 чисел");
// 		if (num > 0 && num % 2 == 0){
// 			positiveNumber++;
// 			evenNumber++;
// 		}
// 		else if (num > 0 && num % 2 !== 0) {
// 			positiveNumber++;
// 			oddNumber ++;
// 		}
// 		else if (num < 0 && num % 2 == 0){
// 			negativeNumber++;
// 			evenNumber++;
// 		}
// 		else if (num < 0 && num % 2 !== 0){
// 			negativeNumber++;
// 			oddNumber ++;
// 		}
// 		else if (num == 0){
// 			zero++;
// 		}
// 		else {
// 			alert("error");
// 			break;
// 		}
// 			i++;
// }
// document.write(positiveNumber +" - кількість додатніх чисел"+"<br>");
// document.write(negativeNumber +" - кількість відємних чисел"+"<br>");
// document.write(zero +" - кількість нулів"+"<br>");
// document.write(evenNumber+" - кількість парних чисел"+"<br>");
// document.write(oddNumber+" - кількість непарних чисел"+"<br>");


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хо- чет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let i = 1;
// let decision;
// while(i) {
// 	let num1 = parseFloat(+prompt("Введіть перше число"));
// 	let sign = prompt("Введіть знак необхідної дії");
// 	let num2 = parseFloat(+prompt("Введіть друге число"));
// 		console.log(num1 + " " + num2 + " " + sign);
// 		if(sign == "+") {
// 			decision = num1 + num2;
// 		}
// 		else if (sign == "-"){
// 			decision = num1 - num2;
// 		}
// 		else if (sign == "/"){
// 			decision = num1 / num2;
// 		}
// 		else if (sign == "*"){
// 			decision = num1 * num2;
// 		}
// 		else {
// 			alert("Некоректне введення");
// 			break;
// 		}
// 		alert(decision);

// 		if (confirm("Хочете вирішити ще приклад ?")){
// 			continue;
// 		}
// 		else {
// 			break;
// 		}
// 	i++;
// }
	

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.


// let str = " - хочете побачити наступний день";
// let i = 0;
// 	while (i <= 7){
// 			i++;
// 			switch(i){
// 				case 1:{
// 					confirm("Пн " + str); break;
// 				}  
// 				case 2:{
// 					confirm("Вт " + str); break;
// 				}
// 				case 3:{
// 					confirm("Ср " + str); break;
// 				}
// 				case 4:{
// 					confirm("Чт " + str); break;
// 				}  
// 				case 5:{
// 					confirm("Пт " + str); break;
// 				}
// 				case 6:{
// 					confirm("Сб " + str); break;
// 				}  
// 				case 7:{
// 					confirm("Нд " + str); break;
// 				}
// 				default: {
// 					continue;
// 				} 
// 			}
// 	console.log(i); 
// 	}

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// let sum = 0;
// let i = 0;
// let r = 0;
// let number = 1;
// for (i = 2; i <= 9; i++){
// 	for (number = 1; number <= 10; number++) {
// 		document.write(i + " * " + number + " = " + (i*number) + "<br>");
// 	}
// }


// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользова- тель не выберет == N.

// let guessTheNumber = 13;
// let number = +prompt("Введіть число від 0 до 100", 13);
// 	for (let i = 0; i <=100; i++){
// 		if(number <=50) {
// 			i /= 2;
// 			console.log(i);
// 		}
// 		else if(number >=50){
// 			i = 50\2;
// 			console.log(i);
// 		}
// 	}
	


// --------------------   red МАСИВИ red -------------------

// let arr = new Array (); //пустий
// arr[0] = "red";
// arr[1] = "yellow";
// arr[2] = "green";
// arr[3] = "purple";
// arr[4] = "brown";
// console.log(arr);

// let arr = new Array('red','silver','green');
// console.log(arr);

// let arr = ['red','blue'];


// let students = ['Середюк','Подшивайлов','Мельник','Туз','Максимчук','Дей','Віднічук','Кухарець','Мокринський','Фурик','Ананченко','Матичак','Філюк'];
// 	document.write('<ol>');
// 	for (i = students.length - 1; i>= 0; i--){// зворотний порядок циклу
// 		document.write("<li>"+students[i]+'</li>');
// 	}
// 	document.write("</ol>");

// let students = ['Середюк','Подшивайлов','Мельник','Туз','Максимчук','Дей','Віднічук','Кухарець','Мокринський','Фурик','Ананченко','Матичак','Філюк'];
// 	document.write(students.join('<br>'));// join - розділяє кожен елемент масиву вказаним символом
// 	document.write("<hr>");

// let students = ['Середюк','Подшивайлов','Мельник','Туз','Максимчук','Дей','Віднічук','Кухарець','Мокринський','Фурик','Ананченко','Матичак','Філюк'];
	
// 	students.shift();// видаляє перший елемент
// 	document.write(students.join('<br>'));
// 	document.write("<hr>");

// 	students.unshift("Віднічук","Туз");// додає елемент на початок масиву
// 	document.write(students.join('<br>'));
// 	document.write("<hr>");

// students.pop();//видалення останього елементу // працюють швидше
// students.push('Ананченко'); //  додає в кінець масиву

// let copy_stud = students.slice(1,5); // виведеня від 1 до 4 - послідовність
// document.write(copy_stud);

// students.splice(2, 5, 'Петров', 'Чуй')
// // по елементах
// // 1 парм - з якого елемента видаляти, 
// // 2 - кількість яку треба видалити 
// // 3 - 
// document.write(students);

// //індекс елемента за вмістом yellow - 
// // document.write(students.indexOf('Туз'));
// console.log(students);
// // document.write(students.indexOf(3,'Туз'));// з якого положення починати пошук

// // document.write(students.lastIndexOF('Дей')); // пошук з кінця

// // document.write(students.reverse());
// document.write(students.sort());//впорядкування за алфавітом
// // з числами як рядковий тип


//// ЗАВДАННЯ red
// Вивести на сторінку в стовпчик назви місяців різними кольорами

// let month = ['Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень','Січень','Лютий','Березень','Квітень'];
// let color = ['red','lime','orange','green','pink','purple','yellow','brown','violet','gold','magenta','cyan'];

// 	document.write('<ol>');
// 	for (i = 0; i>= month.length - 1; i++){// зворотний порядок циклу
// document.write("<li style = "+ "color:'+color[i]+';">'+month[i]+'</li>')
// 	}
// 	document.write("</ol>");

///Висилица

// let words = ['step','sun','rain','flower','sky'];
// let word = words[parseInt(Math.random()*words.length)];
// let amswer = [];
// for (let i = 0; i < word.length; i++){ // заповнення масиву з відповідями
// 	amswer[i] = "_";

// }
// let count = word.length;// попадає рандомне слово
// while(count > 0){
// 	alert(amswer.join(" "));

// 	let letter = +prompt("enter");
// 	if(letter === null){// exit game
// 		alert("Game over");
// 		break;
// 	}
// 	else if (letter.length !=1){//введено більше ніж 1 символ
// 		alert("error");
// 	}
// 	else {
// 		for (let i = 0; i<word.length; i++){
// 			if(word[i] == letter){
// 				amswer[i] = length;
// 				count --;
// 			}
// 		}
// 	}				
// }
// document.write("You Won " + amswer.join(" "));

//10 завтдання число від 0 до 100 

// alert ("number 0 - 100");

// let number = 50;
// let number2 = 50;

// let answer;

// do {
// 	answer = prompt("<,>,=" + number.toFixed(0));
// 	if(answer == ">"){
// 		number = number + (number2/2);
// 		number2 = number2/2;
// 	}
// 	else if (answer == )
// } while(answer != "=")
// document.write(number.toFixed(0));

//SPLIT
// let word = [1,2,3,4,5,6];
// let word2 = word.join(","); 
// console.log(word);
// console.log(word2);
// let word3 = word2.split(",");
// console.log(word3);

//перезапис рядка
// let word = "miltipli";
// let newWordArr = word.split(""); 
// newWordArr[0] = "M";
// console.log(newWordArr);

//////// red lime ФУНКЦІЇ lime red ////


// function getName(){
// 	let name = prompt("enter name");
// 	showName(name);
// }

// function showName(persone){
// 	console.log("hi " + persone);
// }

// getName();

// let getAge = function(){
// 	let age = prompt("enter age");
// }
// getAge();


// function add(a,b){
// 	document.write(a+b);
// }

// let year = prompt("enter year");
// function getAge(year){
// 	return 2020 - year; 
// }
// console.log(getAge(year)); 



/// ПРАКТИЧНА

// let personeYear = 2001; 
// let carYear = 2016;
// let dogYear = 2012;
// const currentYear = 2020;


// function calcAge(year){
// 	return currentYear - year;
// }
// function showResult(year){
// 	if(calcAge(year) > 10){
// 	console.log("> 10");
// 	}
// 	else {
// 		console.log("< 10");
// 	}
// }
// showResult(personeYear);
// showResult(carYear);
// showResult(dogYear);

// // РЕКУРСИВНА ФУНКЦІЯ
function recur(count){
	if(count > 0) {
		console.log("Hello");
		recur(count-1); 
	}
}
//анонімна функція














