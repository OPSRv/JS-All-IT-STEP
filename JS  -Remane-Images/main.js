let tab = document.querySelectorAll('.enter_text');
	for(let i = 0; i < tab.length; i++){
	tab[i].addEventListener('click', function(event){
		let tagName = event.target.tagName.toLowerCase();
		if (tagName == 'td') {
			this.innerHTML = prompt('Введіть текст');
		}
	})
}