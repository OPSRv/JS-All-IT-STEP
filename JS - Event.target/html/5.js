let button = document.querySelectorAll('button');
let box = document.querySelectorAll('.box');
let wrapper = document.querySelector('.wrapper');
	// console.log(box);
wrapper.addEventListener('click', function(event) {
	let tagName = event.target.tagName.toLowerCase();
		console.log(tagName);
		let dataTab = event.target.getAttribute('data-tab');
		// console.log(dataTab);
	if (tagName == 'button'){
		for(let i = 0; i < box.length; i++){
			if (dataTab == i){
				box[i].style.display = 'none';
				// console.log(dataTab + 'IF')
			}
		}	
	}
})
