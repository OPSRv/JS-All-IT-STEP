let box = document.querySelector('.box');
let p = document.querySelector('p');

box.addEventListener('click', function(event) {
	 p.style.display = (p.style.display == 'none') ? 'block' : 'none'
})