let $mainList = document.querySelectorAll(".wrapper>ul>li");
let $listbody = document.querySelectorAll(".list_body");
let $li = document.querySelectorAll("body > div.wrapper > ul > li > ul > li");
let $rotateIcon = document.querySelectorAll(".rotate_icon");
let $listText = document.querySelectorAll(".wrapper>ul>li:nth-child(3)>ul>li")
let $text = document.querySelectorAll(".text");
let $mess = document.querySelector('.mess');

for (let i = 0; i < $mainList.length; i++) {
  $mainList[i].addEventListener('click', function(){
    if ($listbody[i].style.display == 'list-item'){
      $listbody[i].style.display = 'none';
      $rotateIcon[i].style.transform = 'scale(1, 1)';
      $rotateIcon[i].style.flipHorizontal = 'FlipH';
      $rotateIcon[i].style.color = 'rgb(255,255,255)';
    }
    else{
      $rotateIcon[i].style.color = 'rgba(255,255,255,.4)';
      $listbody[i].style.display = 'list-item';
      $rotateIcon[i].style.transform = 'scale(1, -1)';
      $rotateIcon[i].style.flipHorizontal = 'FlipH';
      $rotateIcon[i].style.transition = '1.5s';
    }
  })
}
for(let j = 0; j < $li.length; j++ ){
  $li[j].addEventListener('mouseenter', function(){
  this.style.marginLeft = '20px';
  this.style.transition = '1s';
  })
  $li[j].addEventListener('mouseleave', function(){
    this.style.marginLeft = '0px';
  })
}
for(let g = 0; g < $listText.length; g++ ){
$listText[g].addEventListener('click', function(event){
  let tagName = event.target.tagName.toLowerCase();
  if(tagName == 'li'){
    $mess.style.height = '100vh';
    $text[g].style.display = 'flex';
    $text[g].style.zIndex = '3';
    }
    $mess.addEventListener('click',function(event){
    $mess.style.height = '0vh';
    $text[g].style.display = 'none';
    $listbody[i].style.display = 'list-item';
    event.stopPropagation();
    },true)
})
}
