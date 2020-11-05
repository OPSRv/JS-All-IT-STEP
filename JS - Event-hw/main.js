let $tetxPage = document.querySelector('.text_page');//info
let $textFromList = document.querySelectorAll('.text_from_list');// article
let $li = document.querySelectorAll('aside li');

let $p = document.querySelectorAll('aside p');






for (let i = 0; i < $li.length; i++){
	$li[i].addEventListener('click',function(){
		$tetxPage.style.display = 'none';
		for(let j = 0; j < $textFromList.length; j++){
			$textFromList[j].style.display = 'none';
			}
		$textFromList[i].style.display = 'block';
	})
}
