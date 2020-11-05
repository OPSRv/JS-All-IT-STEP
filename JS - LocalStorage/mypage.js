window.addEventListener('storage',function(){
	let value = localStorage.getItem('login');
	if (value && value.trim()) {
		document.querySelector('h1').textContent = 'Hello ' + value; 
	}
})
