//task # 1 
let btn_task_1 = document.querySelector('#btn_task_1');
let Yourlogin = document.querySelector('#Yourlogin');
let chec_task_1 = document.querySelector('#chec_task_1');

btn_task_1.addEventListener('click', function () {
    event.preventDefault();
    if (chec_task_1.checked){
        alert('«Привет, ' + Yourlogin.value + ' Я тебя запомнил».')
    } else {
        alert('«Привет, ' + Yourlogin.value + '! Я тебя не запомнил».')
    }
    Yourlogin.value = '';
})
//task # 2
let btn_task_2 = document.querySelector('#btn_task_2');
let email_t2 = document.querySelector('#email_t2');
let login_t2 = document.querySelector('#login_t2');
let pas_t2 = document.querySelector('#pas_t2');
let rep_pas_t2 = document.querySelector('#rep_pas_t2');

btn_task_2.addEventListener('click', function(){
	if(pas_t2.value == rep_pas_t2.value && pas_t2.value.length >=8 && login_t2.length != 0 && email_t2.checkValidity()){
		alert('На почту ' + email_t2.value + ' отправлено письмо с подтверждением');
	}
	else{
		alert('error')
	}
})		
//task # 3
function createDiv(){
    return document.createElement('div');
}
document.querySelector('#btn_save_task_3').addEventListener('click',function (){
  event.preventDefault();
   let task_3 = document.querySelector('.task_3');

  let boxTable = createDiv();
  boxTable.style.background = 'rgb(250,240,230)';
  boxTable.style.width = '600px';
  boxTable.style.padding = '10px';
  boxTable.style.margin = '0 auto';
  boxTable.style.marginTop = '20px';
  let firstname = document.querySelector('#firstname');
  let lastname = document.querySelector('#lastname');
  let date = document.querySelector('#date');
  let radiotask_3 = document.getElementsByName('gender');
    for(let i = 0; i <radiotask_3.length; i++){
      if (radiotask_3[i].checked) {
        radiotask_3 = radiotask_3[i].value;
      }
    }
    let country = document.querySelector('#country').getElementsByTagName('option');
    for(let j = 0; j <country.length; j++){
      if (country[j].selected) {
        country = country[j].value;
      }
    }
    let city = document.querySelector('#city').getElementsByTagName('option');
    for(let n = 0; n <city.length; n++){
      if (city[n].selected) {
        city = city[n].value;
      }
    }
    let skills = document.querySelector('.span_4').getElementsByTagName('input');
    let skillsArr = [];
     for(let y = 0; y <skills.length; y++){
      if (skills[y].checked) {
        skillsArr[y] = skills[y].value;

      }
    }
    let skillsArrFilter = skillsArr.filter(function (el) {
      return el != null;
});

  boxTable.innerHTML = `
    <table border="1" cellspacing="0" cellpadding="1" width="600px">
      <tr><td>Firsname</td><td>${firstname.value}</td></tr>
      <tr><td>Lastname</td><td>${lastname.value}</td></tr>
      <tr><td>Birthday</td><td>${date.value}</td></tr>
      <tr><td>Gender</td><td>${radiotask_3}</td></tr>
      <tr><td>Country</td><td>${country}</td></tr>
      <tr><td>City</td><td>${city}</td></tr>
      <tr><td>Skills</td><td>${skillsArrFilter.join(', ')}</td></tr>
    </table>`;
  task_3.insertAdjacentElement('afterend',boxTable);
})


//task # 4
function styleContainer(el){
    el.style.display = 'flex';
}

let task_4 = document.querySelector('.task_4');
let r = document.querySelector('#redColor');
let g = document.querySelector('#greenColor');
let b = document.querySelector('#blueColor');
let btn = document.querySelector('#addColor');
  let box_color = createDiv();
  task_4.insertAdjacentElement('beforeend',box_color); 
  box_color.style.width = '600xp';
  box_color.style.padding = '10px';
  box_color.style.display = 'flex';
  box_color.style.flexFlow = 'row wrap';
  task_4.style.marginBottom = '20px';
btn.addEventListener('click', function() {
  event.preventDefault();

  if (
    r.value >= 0 && r.value <=255 && r.value !=='' && 
    g.value >= 0 && g.value <=255 && g.value !=='' && 
    b.value >= 0 && b.value <=255 && b.value !==''
    ) {
  let palette = createDiv();
  box_color.insertAdjacentElement('afterbegin',palette);
  palette.style.display = 'flex';
  palette.style.width = '170px';
  palette.style.height = '30px';
  palette.style.border='1px solid silver';
  palette.style.paddingRight = '3px';
  palette.style.margin = '5px'
  let colorLeft = createDiv();
  palette.insertAdjacentElement('afterbegin',colorLeft);
  colorLeft.style.width = '30px';
  colorLeft.style.background = `rgb(${r.value},${g.value},${b.value})`;
  colorLeft.style.border='1px solid silver';
  let colorText = createDiv();
  palette.insertAdjacentElement('beforeend',colorText);
  colorText.style.display = 'flex';
  let rgbText = document.createElement('span');
  colorText.insertAdjacentElement('afterbegin',rgbText);
  rgbText.textContent = `RGB(${r.value}, ${g.value}, ${b.value})`;
  rgbText.style.alignSelf = 'center';
  rgbText.style.paddingLeft = '5px';
  }
  else{
    alert('error');
  }
 })
//task # 5
let question = document.querySelector('#question');
let correctAnswer = document.querySelector('#correctAnswer');
let wrongAnswer = document.querySelector('#wrongAnswer');
let btn_task_5 = document.querySelector('#btn_task_5');
btn_task_5.addEventListener('click',() =>{
  event.preventDefault();
  if (
   question.value !=='' &&
   correctAnswer.value !=='' && 
   wrongAnswer.value !==''  
    ) {
    let boxQuestion = createDiv();
      boxQuestion.innerHTML = `
    <u><span>${question.value}</span></u><br>
    <span>Correct answer: ${correctAnswer.value}</span><br>
      <span>Wrong answer: ${wrongAnswer.value}</span>
     `;
      boxQuestion.style.paddingBottom = '20px';
      document.querySelector('.allQuestion').insertAdjacentElement('beforeend',boxQuestion);
  }
  else{
    alert('error');
  }
  question.value = '';
correctAnswer.value = '';
wrongAnswer.value = '';
}
)










