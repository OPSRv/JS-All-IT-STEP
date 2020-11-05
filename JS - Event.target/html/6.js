let box = document.querySelector('.box');
let load = document.querySelector('progress');
box.addEventListener('click', function(event) {
	let tagName = event.target.tagName.toLowerCase();
	if (tagName == 'button'){
		load.value += 5;	
	}
})



