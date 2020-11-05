let words = [
'time',
'thing',
'man',
'woman',
'way',
'life',
'child',
'world',
'school',
'state',
'family',
'student',
'group',
'country',
'problem',
'hand',
'part',
'place',
'case',
'week',
'company',
];
let word = words[parseInt(Math.random()*words.length)].split('');//масив рандомного слова
console.log(word);
let answer = [];
let h2 = document.querySelector('h2');
let inputIn = document.querySelector('#inputIn');
let btn = document.querySelector('#buttonIn');
let numberAttempts = word.length + 3;// кількість спроб
let attempt = document.querySelector('#attempt');
let img_hangMan = document.querySelectorAll('.img_hangMan');
let c = 0;
let newGame =  document.querySelector('#newGame');

newGame.addEventListener('click', function(){
	window.location.reload();
})

img_hangMan[0].style.display = 'block';
	for (let i = 0; i < word.length; i++){
		answer[i] = "_";
	}
h2.textContent = answer.join(' ');//вивід на сторінку '_'  
attempt.textContent = numberAttempts;

	btn.addEventListener('click', function(){
		for(let i = 0; i < answer.length; i++){
			 if (word[i] === inputIn.value){
				answer[i] = inputIn.value;
				h2.textContent = answer.join(' ');//вивід на сторінку '_'  
				inputIn.value = null;
				break;
			}
		else if (inputIn.value === ' ' || inputIn.value === ''){

		        alert('Введіть літеру');
		        numberAttempts -= 1; // кількість спроб з врахуванням помилок
		        inputIn.value = null;
		        c+=1;
		        console.log(c);
				break;
		      }
			else if (word[i].indexOf(inputIn.value || inputIn.value.length > 1 || inputIn.value === ' ' && word[i] ==answer[i])){
				let numberAttemptsAdd = (answer.length-1) - i;				 
					if(numberAttemptsAdd === 0){
						numberAttempts -= 1;
						inputIn.value = null;
					c+=1;
					}
			}
		}
		attempt.textContent = numberAttempts;
		if(numberAttempts <= 0){
			numberAttempts = 0;
			img_hangMan[9].style.display = 'block';//!!!
			attempt.textContent = numberAttempts + ' Ви програли';
			setTimeout(() => alert(' Ви програли'), 200);
			btn.style.display = 'none';
		}
		else if (answer.indexOf('_') == -1){
			setTimeout(() => alert('Вітаю ви виграли'), 200);// інтервал, щоб заповлювалось слово
			btn.style.display = 'none'; 
		}
img_hangMan[c].style.display = 'block';
})




