let input = document.querySelectorAll('input');
let btn = document.querySelector('.btn');
let trueAudit = 0;
// 1. Створити Об'єкт, записати дані, які вказав користувач
btn.addEventListener('click', function(event){
	let contact = {};
	event.preventDefault();
	for(let i = 0; i <input.length; i++){
		contact[input[i].getAttribute('name')] = input[i].value;
	}
// 2. Створити метод для об'єкта, який перевіряє email (наявність @, якщо умова виконується - налаштувати рамку зеленим кольором, ні - червоним);
contact.emailShow = function(){
	for(let j = 0; j < contact.email.length; j++ ){
		if(contact.email[j] == '@'){
				document.querySelector('form input[name = "email"]').style.borderBottom = '3px solid  #30fc9d';
				break;
			}
		else{
			document.querySelector('form input[name = "email"]').style.borderBottom = '3px solid red';
			
		}
	}
}	
contact.emailShow(); 
// // 3. Створити метод для об'єкта, який перевіряє пароль (не менше 8 символів, якщо умова виконується - налаштувати рамку зеленим кольором, ні - червоним);
	contact.checkPassword = function(){
		if((contact.password).length < 8){
			document.querySelector('form input[name = "password"]').style.borderBottom = '3px solid #d76b60';
			trueAudit++;
		}
		else {
			document.querySelector('form input[name = "password"]').style.borderBottom = '3px solid  #30fc9d';
		}
	}
	contact.checkPassword();
// 4. Створити метод для об'єкта, який перевіряє пароль та повторення пароля(мають бути однакові, якщо умова виконується - налаштувати рамку зеленим кольором, ні - червоним);
contact.passwordAudit = function(){
	if (contact.password === contact.choosepassword){
		document.querySelector('form input[name = "choosepassword"]').style.borderBottom = '3px solid  #30fc9d';
	}
	else {
		document.querySelector('form input[name = "choosepassword"]').style.borderBottom = '3px solid #d76b60';
		trueAudit++;
	}
}
contact.passwordAudit();
// 5. Створити метод для об'єкта, який перевіряє чи всі вимоги дотримано (emsil, та паролі), якщо та - показати повідомленя alert, Привіт + ім'я користувача
contact.FuulAudit = function(){
	console.log(trueAudit);
	if(trueAudit === 0){
		alert('Привіт ' + contact.first_name);
	}
}
contact.FuulAudit();
})








