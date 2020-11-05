let ul = document.querySelector('ul');

ul.addEventListener('click',function(event) {
	if (event.target.className == 'tab-h') {
 	let dataTab = event.target.getAttribute('data-tab');
 	var tabH = document.getElementsByClassName('tab-h');
	for(let i = 0; i < tabH.length; i++){
		tabH[i].classList.remove('active');
	}
	event.target.classList.add('active');
 	let tabBody = document.getElementsByClassName('tab-b');
 	for(let i = 0; i < tabBody.length; i++){
 		if (dataTab == i) {
 			tabBody[i].style.display = 'block';
 		}else{
 			tabBody[i].style.display = 'none';
 		}
 	}
	}
})


