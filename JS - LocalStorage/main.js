

// // let text = 'Lorem ipsum';

// // localStorage.setItem('text',text);
// let i = 1;
// document.querySelector('.save').addEventListener('click', function() {
// 	// let value = localStorage.getItem('text');
// 	// document.querySelector('h1').textContent = value;
// 	let text = document.querySelector('input').value;
// 	localStorage.setItem(`name_header_${i}`, text);
// 	document.querySelector('input').value = '';
// 	i++;
// })
// document.addEventListener('DOMContentLoaded', function() {
// 	let text = localStorage.getItem('text');

// 	if (text && text.trim()){
// 		document.querySelector('h1').textContent = text;
// 	}	
// })
document.querySelector('.clear').addEventListener('click', function() {
	// localStorage.removeItem('.name_header');
	localStorage.clear();
})

document.querySelector('.save').addEventListener('click', function() {
	let value = document.querySelector('input').value;
	let remember = document.querySelector('.remember');
	let obj = {
		login: document.querySelector('.login').value, 
		password: document.querySelector('.password').value
	};
	if(remember.checked){
		localStorage.setItem('person', JSON.stringify(obj));
		localStorage.setItem('check', 'true');
	}
	else {
		localStorage.removeItem('person');
		localStorage.setItem('check', 'false');
	}
	localStorage.setItem('login', value);

})

function pageLoaded() {
	let persone = JSON.parse(localStorage.getItem('person'));
	if(persone && persone.login && persone.password){
		document.querySelector('.login').value = persone.login; 
		document.querySelector('.password').value = persone.password;
	}
	let ch = localStorage.getItem('check');
	let remember = document.querySelector('.remember');
	if (ch == 'true') {
		
		remember.checked = true;
	}
	else{
		remember.checked = false;
	}
}
document.addEventListener('DOMContentLoaded', pageLoaded());




