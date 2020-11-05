let images = document.querySelectorAll('img');
let qut = document.querySelectorAll('blockquote');
for(let i = 0; i<= qut.length; i++){
qut[i].addEventListener('mouseover', function(event) {
	let tagName = event.target.tagName.toLowerCase();
	if (tagName == 'blockquote') {
		qut[i].classList.add("quote_null");
		images[i].style.display = 'inline';
	}
})
qut[i].addEventListener('mouseleave', function(event) {
	let tagName = event.target.tagName.toLowerCase();
	if (tagName == 'blockquote') {
		qut[i].classList.remove("quote_null");
		images[i].style.display = 'none';
	}
})

}