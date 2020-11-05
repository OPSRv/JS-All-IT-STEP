function PageLoaded() {
	let $input = document.querySelector('.lists');
	let $ul = document.querySelector('.todos');
	loadToDo();
	let $span = document.querySelectorAll('.todos span');
	let $save = document.querySelector('.save');
	let $tipBtn = document.querySelector('.tipBtn');
	let $closebtn = document.querySelector('.closebtn');
	let $clear = document.querySelector('.clear');
	let $pencil = document.querySelector('#pencil');
	let $lists = document.querySelector('.lists');


	function deleteToDo() {
		for (i = 0; i < $span.length; i++) {
			$span[i].addEventListener('click', function () {
				this.parentElement.remove();
			})
		}
	}
	deleteToDo();
	$input.addEventListener('keypress', function (key) {
		if (key.which == 13) {
			let value = this.value;
			this.value = '';
			if (value && value.trim()) {
				let li = document.createElement('li');
				let span = document.createElement('span');
				let icon = document.createElement('i');
				icon.classList.add('fas', 'fa-trash-alt');
				span.insertAdjacentElement('afterbegin', icon);
				li.textContent = value;
				li.insertAdjacentElement('afterbegin', span);
				$ul.insertAdjacentElement('afterbegin', li);
				$span = document.querySelectorAll('.todos span');
				deleteToDo();
			} else {
				alert('error? || enter task');
			}
		}
	})
	$ul.addEventListener('click', function (event) {
		let el = event.target.tagName.toLowerCase();
		if (el == 'li') {
			event.target.classList.toggle('checked');
		}
	})
	//save
	$save.addEventListener('click', function () {
		localStorage.setItem('List', $ul.innerHTML);
	})

	function loadToDo() {
		let task = localStorage.getItem('List');
		if (task && task.trim()) {
			$ul.innerHTML = task;
		}
	}
	$tipBtn.addEventListener('click', function () {
		document.querySelector('#overlay').style.height = '100%';
	})
	$closebtn.addEventListener('click', function () {
		document.querySelector('#overlay').style.height = '0';
	})
	$pencil.addEventListener('click', function () {
		$lists.classList.toggle('listnone');
	})
	$clear.addEventListener('click', function () {
		$ul.innerHTML = '';
		localStorage.removeItem('List');
	})



}
document.addEventListener('DOMContentLoaded', PageLoaded); // виклик функції при повній загрузці сторінки(функція без дужок)