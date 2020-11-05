// red// 		// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let num1 = +prompt("Введіть початок діапазону");
let num2 = +prompt("Введіть кінець діапазону");
let sum = 0;
		while (num1 <= num2){
			sum += num1;
			num1++;	
		}
		document.write(sum);

// red	// 		// 	// 2.Запросить 2 числа и найти только наибольший общий делитель.
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

// red// 3.Запросить у пользователя число и вывести все делители этого числа
// let num = +prompt("Введіть число");
// let i = 0;
// 	while(i<=num){
// 		if (num%i == 0){
// 			document.write(i+"<br>");
// 		}
// 	i++;
// 	}

//red 4.Определить количество цифр в введенном числе.
// let num = +prompt("Введіть число");
// let i = 0;
// 	while (num >= 1){
// 		num = num/10;
// 		i++;
// 	}
// 	document.write(i+"<br>");

// red// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных отрицательных и четных и нечетных. 

// let i = 1;
// let positiveNumber = 0;
// let negativeNumber = 0;
// let evenNumber = 0;
// let oddNumber = 0;
// let zero = 0;
// let counter = 10;
// while(i <=10){
// 		let num = +prompt("Введіть " + counter + " чисел");
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
// 			counter--;
// }
// document.write(positiveNumber +" - кількість додатніх чисел"+"<br>");
// document.write(negativeNumber +" - кількість відємних чисел"+"<br>");
// document.write(zero +" - кількість нулів"+"<br>");
// document.write(evenNumber+" - кількість парних чисел"+"<br>");
// document.write(oddNumber+" - кількість непарних чисел"+"<br>");


// red 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хо- чет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
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

//red // 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// let number = prompt("enter numb");
// let count = prompt("shift by _");
// let count_n = number.length;
// let offset = count_n - count;
// let f = 1;
// for (let i = 1; i <= offset; i++){
// 	f *= 10;
// }
// let numb = parseInt(number/f);
// let numb2 = number%f;
// document.write(numb2);
// document.write(numb);

//red // 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// let str = " - хочете побачити наступний день ?";
// let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
// let i = 0;
// let count = days[i] + str;
// 	while (confirm(count)){
// 		i = (i + 1) % days.length;
// 		count = days[i] + str;
// 		console.log(i);
// 	}

//red // 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// let sum = 0;
// let i = 0;
// let r = 0;
// let number = 1;
// for (i = 2; i <= 9; i++){
// 	for (number = 1; number <= 10; number++) {
// 		document.write(i + " * " + number + " = " + (i*number) + "<br>");
// 	}
// }


