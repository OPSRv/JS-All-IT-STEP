
							// // 1.Запросить у пользователя его возраст и определить, кем он
							// // является: ребенком (0–2), подростком (12–18), взрослым
							// // (18_60) или пенсионером (60– ...).

let age = +prompt("Введіть ваш вік");
	if (age >= 0 &&  age <= 2){
		document.write("Дитина");
	}
	else if (age >= 12 && age < 18){
		document.write("Підліток");
	}
		else if (age >= 18 &&  age < 60){
		document.write("Дорослий");
	}
		else if (age >= 60){
		document.write("Пенсіонер");
	}
	else{
		document.write("щось пішло не так;)");
	}

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

