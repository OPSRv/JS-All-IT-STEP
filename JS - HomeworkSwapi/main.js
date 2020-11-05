let button = 		document.querySelectorAll('button');
let persona1 = 	document.querySelector('.persona_style');
let text = 			document.querySelector('.text');
let imgStar =		document.querySelector('.star_wars');

for(let i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(){

		let dataTab = button[i].getAttribute('data-tab');
		let people = new XMLHttpRequest();
			let url = `https://swapi.dev/api/people/${i+1}/`;
			people.open('GET', url); 
			people.send();

		let audio = new Audio();
		audio.src = 'click.mp3';
		audio.autoplay = true;
		audio.volume = 0.15;

		people.onload = function(){
			if(people.status !== 200){
				console.log(people.status, people.statusText)
			}
			else{
				let result = JSON.parse(people.response);
				showPersona(result);
			}
		}


		function showPersona(result){
			let array = [
			('Name: ' + result.name),
			('Height: ' + result.height),
			('Mass: ' + result.mass),
			('Hair color: ' + result.hair_color),
			('Skin color: ' + result.skin_color),
			('Eye color: ' + result.eye_color)
			];
			let imgArr = ['img/luck.png','img/c3.png','img/r2.png'];
			let ul = 			document.createElement('ul');
			let ulnum = 		document.querySelectorAll('ul');
			let imgages = 		document.createElement('img');
			let imgagesNum = 	document.querySelectorAll('img');
			let img_src = imgArr[i];

			imgages.setAttribute('src',img_src);
			text.insertAdjacentElement('afterbegin', ul);
			text.style.justifyContent = 'space-around';

				for(let i = array.length - 1; i >= 0; i--){
					let li = document.createElement('li');
					ul.insertAdjacentElement('afterbegin', li);
					text.insertAdjacentElement('beforeend', imgages);
					li.textContent = array[i];
					imgStar.remove();
					if(ulnum.length === 1){
						ulnum[0].remove();
						imgagesNum[0].remove();
					}
				}
		}
})
}