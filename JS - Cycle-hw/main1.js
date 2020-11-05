// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let number = prompt("enter numb");
let count = prompt("shift by _");
let count_n = number.length;
let offset = count_n - count;
let f = 1;
for (let i = 1; i <= offset; i++){
	f *= 10;
}
let numb = parseInt(number/f);
let numb2 = number%f;
document.write(numb2);
document.write(numb);