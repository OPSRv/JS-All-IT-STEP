let wrapper = document.querySelector('.wrapper');
let clt_X = document.querySelector('#position_X');
let clt_Y = document.querySelector('#position_Y');

wrapper.addEventListener('mousemove', function showXY(event){
	let tagName = event.target.tagName.toLowerCase();
	if (tagName = '.wrapper') {
		console.log(event.offsetX);
		console.log(event.offsetY);
	clt_X.textContent = 'X = ' + event.offsetX + ',';
	clt_Y.textContent = 'Y = ' + event.offsetY;
}
})
wrapper.addEventListener('contextmenu', function(event){
	event.preventDefault();
		alert('right click');
})
wrapper.addEventListener('click', function(event){
		alert('left click');
})









