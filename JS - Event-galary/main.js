// let $text = document.querySelectorAll('p');
// let n = true;

//red//перемикач
// for (let i = 0; i<$text.length; i++) {
// 	$text[i].addEventListener('click', function(){
// 		if (this.textContent == 'Hello'){
// 			this.textContent = 'lorem';
// 		}
// 		else{
// 			this.textContent = 'Hello';
// 		}
// 	})
// }

// textContent - текст
// innerHTML - розмітка HTML
// let $star = document.querySelector('.star');
// let $star_btn = document.querySelector('.star_btn');
// 	$star_btn.addEventListener('click', function() {
// 		$star.innerHTML += '* <br>';
// 	})



// console.log($a.hasAttribute("title")); // метод возвращает Boolean значение указывающее, имеет ли указанный элемент указанный атрибут или нет. і чи є він взагалі
// let $a = document.querySelector('a');
// console.log($a.getAttribute('title')); // повертає значення атрибуту
// $a.setAttribute('class','text'); //додати чи змінити атрибути
// $a.removeAttribute('class','text'); //видаляє атрбути

let $img = document.querySelector('#editImg');
let $arr_left = document.querySelector('#left');
let $arr_right = document.querySelector('#right');

let $min_img = document.querySelectorAll('.minImg img');


let min_src = [];
for (let i = 0; i < $min_img.length; i++){
	min_src[i] = $min_img[i].getAttribute('src');
}

let i = 0;
$arr_right.addEventListener('click', nextImg);

function nextImg(){
	i++;
	if(i == min_src.length){i = 0;}
	$img.setAttribute('src', min_src[i]); 
}

$arr_left.addEventListener('click', nextImgLeft);
function nextImgLeft(){
	i--;
	if(i < 0){i = min_src.length - 1;}
	$img.setAttribute('src', min_src[i]); 
}

for(let j = 0; j < $min_img.length; j++ ){
	$min_img[j].addEventListener('click', function(){
		$img.setAttribute('src', min_src[j]); //стає головною
		i = j;
	})
	$min_img[j].addEventListener('mouseenter', function(){
		this.style.transform = 'scale(1.2)';
		this.style.opacity = '1';
		this.style.zIndex = '1';
	})
	$min_img[j].addEventListener('mouseleave', function(){
		this.style.transform = 'scale(1)';
		this.style.opacity = '.6';
		this.style.zIndex = '0';
	})
}























