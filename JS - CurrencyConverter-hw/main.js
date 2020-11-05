
let buy = document.querySelector('#buy'); 
    buy.style.backgroundColor = '#84d1b5';
let sale = document.querySelector('#sale');
let footer = document.querySelector('.footer');
let exchangerate = document.querySelector('.exchangerate');

let currency = document.querySelectorAll('.currency');
    let inputUA = document.querySelector('#inputUA');
    let inputUS = document.querySelector('#inputUS');
    let inputEU = document.querySelector('#inputEU');
    let inputRU = document.querySelector('#inputRU');

    let data = new Promise((resolve, reject) =>{
      fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(data => {
        resolve(data.json());
      })
    });
data.then(data => {
  console.log(data);
    let result = data;
    showCurrency(result)
})

let sale_buy = 'buy'; //курс валют buy по дефолту

function showCurrency(result){
  let span_buy_sale = document.querySelectorAll('.span_buy_sale');
  for(let i = 0; i < span_buy_sale.length; i++){
  span_buy_sale[i].addEventListener('click', () => {
    if(span_buy_sale[i].id == 'buy'){
      sale.style.backgroundColor = '#3b8067';
      buy.style.backgroundColor = '#84d1b5';
      sale_buy = 'buy';
    }
    else if (span_buy_sale[i].id == 'sale'){
      sale.style.backgroundColor = '#84d1b5';
      buy.style.backgroundColor = '#3b8067';
      sale_buy = 'sale';
    }
    return sale_buy; //курс валют buy/sale відповідно до умови вибраної корисутвачем
});

for(let i = 0; i < currency.length; i++){
  currency[i].addEventListener('focus', (event) => {
  event.target.style.background = '#abedd5';
    currency[i].addEventListener('input', () => {
      if (event.srcElement === inputUA){
        currency[1].value = (inputUA.value / result[0][`${sale_buy}`]).toFixed(2);
        currency[2].value = (inputUA.value / result[1][`${sale_buy}`]).toFixed(2);
        currency[3].value = (inputUA.value / result[2][`${sale_buy}`]).toFixed(2);
      }
      else if (event.srcElement === inputUS){
        currency[0].value = (inputUS.value * result[0][`${sale_buy}`]).toFixed(2);
        currency[2].value = (inputUA.value / result[1][`${sale_buy}`]).toFixed(2);
        currency[3].value = (inputUA.value / result[2][`${sale_buy}`]).toFixed(2);
      }
      else if (event.srcElement === inputEU){
        currency[0].value = (inputEU.value * result[1][`${sale_buy}`]).toFixed(2);
        currency[1].value = (inputUA.value / result[0][`${sale_buy}`]).toFixed(2);
        currency[3].value = (inputUA.value / result[2][`${sale_buy}`]).toFixed(2);
      }
      else if (event.srcElement === inputRU){
        currency[0].value = (inputRU.value * result[2][`${sale_buy}`]).toFixed(2);
        currency[1].value = (inputUA.value / result[0][`${sale_buy}`]).toFixed(2);
        currency[2].value = (inputUA.value / result[1][`${sale_buy}`]).toFixed(2);
      }
    });
}, true);
  //обнулення після втрати фокусу
  currency[i].addEventListener('blur', (event) => {
    event.target.style.background = '';
      inputUA.value = '';
      inputUS.value = '';
      inputEU.value = '';
      inputRU.value = '';
  }, true);
}
//поточний курс
exchangerate.innerHTML = `
    <div class="buy_exchangerate flex_exchangerate">
      <span>USD - ${result[0].buy}</span>
      <span>EUR - ${result[1].buy}</span>
      <span>RUR - ${result[2].buy}</span>
    </div>
    <div class="sale_exchangerate flex_exchangerate">
      <span>USD - ${result[0].sale}</span>
      <span>EUR - ${result[1].sale}</span>
      <span>RUR - ${result[2].sale}</span>
    </div>
    `;
}
}