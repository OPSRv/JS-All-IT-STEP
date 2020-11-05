let $format = document.querySelector('.format');
console.log($format);
let $par = document.querySelector('.format>p');
let $containerButton = document.querySelector('.bt');
console.log($containerButton.children.length); //quantity

$containerButton.children[0].addEventListener('click', function() {
    $format.style.border = "4px double blue";
    $format.style.padding = "10px";
    $format.style.width = "500px";
    $format.style.margin = "50px 0 0 0";
    $format.style.backgroundColor = "rgb(237,255,242)";
    $format.style.borderRadius = "3px";
    $par.style.color = "rgba(48,76,65)";
    $par.style.fontWeight = "bold";
    $par.style.fontStyle = "italic";
    $par.style.fontFamily = "Times New Roman";
       })

  $containerButton.children[1].addEventListener('click', function() {
    $format.style.border = "7px dashed rgba(77,45,129)";
    $format.style.padding = "10px";
    $format.style.width = "500px";
    $format.style.margin = "50px 0 0 0";
    $format.style.backgroundColor = "rgb(255,226,224)";
    $format.style.borderRadius = "3px";
    $par.style.color = "rgba(77,45,129)";
    $par.style.fontWeight = "bold";
    $par.style.fontStyle = "italic";
    $par.style.fontFamily = "Times New Roman";
  })

  $containerButton.children[2].addEventListener('click', function() {
    $format.style.border = "15px dashed rgb(104,104,104)";
    $format.style.padding = "10px";
    $format.style.width = "500px";
    $format.style.margin = "50px 0 0 0";
    $format.style.backgroundColor = "rgb(211,211,211)";
    $format.style.borderRadius = "5px 50px 50px 5px";
    $par.style.color = "rgba(77,45,129)";
    $par.style.fontWeight = "bold";
    $par.style.fontStyle = "italic";
    $par.style.fontFamily = "Times New Roman";
  })

  $containerButton.children[3].addEventListener('click', function() {
    $format.style.border = "15px outset rgb(37,0,115)";
    $format.style.padding = "10px";
    $format.style.width = "500px";
    $format.style.margin = "50px 0 0 0";
    $format.style.backgroundColor = "rgb(80,47,141)";
    $format.style.borderRadius = "50px 10px 50px 10px";
    $par.style.color = "rgba(0,171,238)";
    $par.style.fontWeight = "bold";
    $par.style.fontStyle = "italic";
    $par.style.fontFamily = "Times New Roman";
})