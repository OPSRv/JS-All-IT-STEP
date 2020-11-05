// client => server => dataBase => server => client 

//callBack
// console.log('Клієнт: хоче отримати список користувачів');
// console.log('...');
// setTimeout(function() {
// 	console.log('Сервер: запитую список користувачів бази даних');
// 	console.log('...');

// 	setTimeout(function(){
// 		console.log('БД: формую список користувачів ');
// 		console.log('...');

// 		setTimeout(function(){
// 			console.log('Сервер: трансформую список для клієнта');
// 			console.log('...');

// 			setTimeout(function(){
// 				console.log('Клієнт: отримую список');
// 				console.log('Показую список');
// 			},2000);
// 		},1000);
// 	},1000);
// }, 2000);

//PROMISE
console.log('Клієнт: хоче отримати список користувачів');
console.log('...');
let promise = new Promise(function(resolve,reject) {
	setTimeout(function() {
		console.log('Сервер: запитую список користувачів бази даних');
		console.log('...');
	resolve();
	// reject('Помилка на етапі сервера');
	},2000);
})
//все ок - resolve
promise.then(function(result){
	return new Promise(function(resolve,reject) {
		setTimeout(function() {
			let users = [
				{uid: 'id1',name: 'Olya'},
				{uid: 'id2', name: 'Max'}
			];
			console.log('БД: формую список користувачів ', users);
			console.log('...');
			resolve(users);
		},1000);
	});
})
.then(function(dbUser){
	return new Promise(function(resolve,reject){
		setTimeout(function() {
			let users = dbUser.map(function(user) {
				return {
					id: Math.floor(Math.random()*100000+10000),
					name: user.name.toUpperCase() 
				}
			});
			console.log('Сервер: трансформую список для клієнта', users);
			console.log('...');
			resolve(users);
		})

	})
})
.then(function(users) {
	setTimeout(function() {
		console.log('Клієнт: отримую список');
		console.log('Показую список', users);
		for (let i = 0; i < users.length; i++) {
			for(key in users[i]){
				console.log(users[i][key]);
			}
		}
	}, 2000);
})
//не ок помилка - reject 
// promise.catch(function(error) {
// 	console.log('Catch', error)
// })


//FETCH
document.querySelector('button').addEventListener('click', load);
function load() {
		let url = 'https://jsonplaceholder.typicode.com/todos/';
		let count = 20;
		fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(list){
			let ul = document.createElement('ul');
			ul.classList.add('users');
			for(let i = 0; i < 20; i++){
				let li = document.createElement('li');
				li.textContent = `${list[i].id}. ${list[i].title}`;
				if(list[i].completed){
					li.classList.add('green');
				}
				else{
					li.classList.add('red');
				}
				ul.insertAdjacentElement('beforeend',li);
			}
			document.body.insertAdjacentElement('afterbegin',ul);
	})
}














































