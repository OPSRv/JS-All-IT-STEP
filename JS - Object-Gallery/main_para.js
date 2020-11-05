// let person = {
// 	name: 'Olya',
// 	lastName: 'Ivanova',
// 	age: 16,
// 	hair: 'black'
// }

// //delete Age if < 18
// function getAge(key, value){
// 	if (key === 'age' && value < 18){
// 		return 'no ok'; //return undefined;
// 	}
// 	else{
// 		return value;
// 		}
// }
// //перетворює в текстовий тормат
// let st = JSON.stringify(person, getAge,5);
// //stringify(person, null,5);

// function getAges(key, value){
// 	if (key === 'age' && value < 18){
// 		return 'no ok';
// 	}
// 	else{
// 		return value;
// 		}
// }
// //перетворює в обєкт 
// let obj = JSON.parse(st, getAge);

// console.log(obj)
// console.log(st);

// let get_server = new XMLHttpRequest();
// let url = 'https://swapi.dev/api/people/82';
// get_server.open('GET', url); 
// // ініціалізує запит(GET - отримали дані, false - синхронний, true - асинхронний, .open('GET', url,false, user, password)
// get_server.send();
// // get_server.onreadystatechange = function(){
// // 	if(get_server.readyState == 4){
// // 		let person = JSON.parse(get_server.response);
// // 		console.log(person);
// // 	}
// // }
// //onreadystatechange - перевірка стану запиту readyState! 4 успішно

// get_server.onload = function(){
// 	if(get_server.status !== 200){
// 		console.log(get_server.status.statusText);
// 	}
// 	else{
// 		let person = JSON.parse(get_server.response);
// 		showPersona(person);
// 	}
// }
// function showPersona(person){
// 	console.log(person);
// 	for(key in person){
// 		document.write(`${key}:${person[key]};<br>`);
// 	}
// }

// let num = +prompt('enter');
// let get_img = new XMLHttpRequest();
// let url = `https://pixabay.com/api/?key=17057694-71101b5d61e1bcf0bfec67626&q=red+places&image_type=photo&per_page=${num}&min_width=800`;
// get_img.open('GET', url); 
// get_img.send();
	
// get_img.onload = function(){
// 	if(get_img.status !== 200){
// 		console.log(get_img.status, get_img.statusText)
// 	}
// 	else{
// 		let result = JSON.parse(get_img.response).hits;
// 		showImg(result);
// 	}
// }
// function showImg(obj_img){
// 	for(let i = obj_img.length -1; i >= 0; i--){
// 	let img_src = obj_img[i].webformatURL;
// 	let img = document.createElement('img');
// 	img.setAttribute('src',img_src);
// 	document.body.insertAdjacentElement('afterbegin', img);
// 	}
// }


// let get_video = new XMLHttpRequest();
// let url = `https://pixabay.com/api/videos/?key=17057694-71101b5d61e1bcf0bfec67626&q=yellow+flowers`;
// get_video.open('GET', url); 
// get_video.send();
	
// get_video.onload = function(){
// 	if(get_video.status !== 200){
// 		console.log(get_video.status, get_video.statusText)
// 	}
// 	else{
// 		let result = JSON.parse(get_video.response).hits;
// 		showVideo(result);
// 	}
// }
// function showVideo(obj_video){
// 	for(let i = obj_video.length -1; i >= 0; i--){
// 	let video_src = obj_video[i].videos.tiny.url;
// 	let iframe = document.createElement('iframe');
// 	iframe.setAttribute('src',video_src);
// 	document.body.insertAdjacentElement('afterbegin', iframe);
// 	}
// }
















