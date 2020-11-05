let box = document.querySelector('.random');
let num = document.getElementById('randonNumber');
box.addEventListener('click', function randomNumber(event) {
	let tagName = event.target.tagName.toLowerCase();
	if(tagName == 'button'){
		// console.log(tagName);
		num.textContent = Math.floor(Math.random() * 101);
		}
})