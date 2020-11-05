let question = ['Лелека','Ставок','Чайник','Торт','Вогонь','Цукерка','Зошит','Вікно','Хліб','Свічка'];
let tdStyle = document.querySelectorAll('td');//питання
let thStyle = document.querySelectorAll('th');//введення
let inputIn = document.querySelectorAll('.input-in');
let btn = document.querySelectorAll('.btn');

for(let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
		if(question[i].toLowerCase() === inputIn[i].value.toLowerCase()){
		tdStyle[i].style.background = 'green';
		inputIn[i].style.display = 'none';
		btn[i].style.display = 'none';
		thStyle[i].classList.add('imgJoy');
		tdStyle[i].style.color = '#fff';
		}
		else if(inputIn[i].value == ''){
			alert('Спробуйте ще раз)');
		}
		else{
		tdStyle[i].style.background = 'red';
		inputIn[i].style.display = 'none';
		btn[i].style.display = 'none';
		thStyle[i].classList.add('imgSadness');
		tdStyle[i].style.color = '#fff';
		}
	})
}