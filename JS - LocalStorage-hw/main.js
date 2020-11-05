let bodyIndex = document.querySelector('body');

if (bodyIndex.dataset.page == 'index'){
let registerForm = document.querySelector('.register-form');
	let reg_name = 		document.querySelector('#reg_name');
	let reg_email = 		document.querySelector('#reg_email');
	let reg_login = 		document.querySelector('#reg_login');
	let reg_password = 	document.querySelector('#reg_password');
	let registration = document.querySelector('#reg_btn');

let loginForm = document.querySelector('.login-form');
	let log_username = document.querySelector('#log_username');
	let log_password = document.querySelector('#log_password');
	let log_btn = document.querySelector('#log_btn');

let crateAccount = document.querySelector('#crateAccount');//registerForm
	crateAccount.addEventListener('click',	() => {
		loginForm.style.display = 'none';
		registerForm.style.display = 'block';
	});
let registerSiginIn = document.querySelector('#registerSiginIn');//registerForm > loginForm
	registerSiginIn.addEventListener('click',	() => {
		registerForm.style.display = 'none';
		loginForm.style.display = 'block';
	});


function addEntry() {
    // Parse any JSON previously stored in allEntries
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
	let reg_name = 		document.querySelector('#reg_name');
	let reg_email = 		document.querySelector('#reg_email');
	let reg_login = 		document.querySelector('#reg_login');
	let reg_password = 	document.querySelector('#reg_password');
	if (
		reg_name.value != '' &&
		reg_email.value != '' &&
		reg_login.value != '' &&
		reg_password.value != '' && reg_password.value.length >= 6
		){
    let entry = {
            'name' : 		reg_name.value,
            'email' : 		reg_email.value,
            'login' : 		reg_login.value,
            'password' : 	reg_password.value
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
		reg_name.value = '';
		reg_email.value = '';
		reg_login.value = '';
		reg_password.value = '';
    }
    else{
    	alert('Виникла помилка');
    }
};


	// event-btn-registration
	registration.addEventListener('click',() => {
addEntry();
		registerForm.style.display = 'none';
		loginForm.style.display = 'block';
});
log_btn.addEventListener('click',() => {
	//array obj user
	let user = JSON.parse(localStorage.getItem('allEntries'));
		for(let i = 0; i < user.length; i++){
			if (log_username.value == user[i].name && log_password.value == user[i].password){
				window.location.href = "profile.html";
				localStorage.setItem("userReg", JSON.stringify(user[i]));
				// => current User
			}
		}
		log_username.value = ''; 
		log_password.value = ''; 
});
}
//user_page
if (bodyIndex.dataset.page == 'user_page'){
	//отримуємо 
	let currentUser = JSON.parse(localStorage.getItem('userReg'));
		// console.log(currentUser.name[0].toUpperCase());
	let loginLetter = document.querySelector('#loginLetter');
		loginLetter.textContent = currentUser.name[0].toUpperCase();
	let helloUser = document.querySelector('#helloUser');
		helloUser.textContent = `Hello, ${currentUser.name}`;
		helloUser.style.paddingRight = '10px';
let profile_name = document.querySelector('#profile_name');
let profile_email = document.querySelector('#profile_email');
let profile_login = document.querySelector('#profile_login');
let reg_password = document.querySelector('#reg_password');
		profile_name.placeholder = `${currentUser.name}`;
		profile_email.placeholder = `${currentUser.email}`;
		profile_login.placeholder = `${currentUser.login}`;
		reg_password.placeholder = '******';

	let circle = document.querySelector('.circle');
		circle.style.cursor = 'pointer';
	// view profile info
		circle.addEventListener('click',()=>{
			let profileInfo = document.querySelector('#profileInfo');
				profileInfo.style.display = 'flex';
			let footerUser = document.querySelector('#footerUser');
		})
		let cancel = document.querySelector('#cancel');
			cancel.addEventListener('click',()=>{
			profileInfo.style.display = 'none';
		});
}