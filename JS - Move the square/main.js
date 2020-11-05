// document.addEventListener('keypress', function(event){
// 	console.log(event.keyCode);
// })
//виводить код клавиши
//119-w
//97-a
//115 -s
//100-d
let box_cont = document.querySelector('.box-container');
let box = document.querySelector('.box');
let box_cont_size = box_cont.getBoundingClientRect();
let boxSize = box.getBoundingClientRect();
let maxX = box_cont_size.width - boxSize.width;
let maxY = box_cont_size.height - boxSize.height;
console.log(maxX,maxY);

let x = 0;
let y = 0;

document.addEventListener('keydown', function(key){
	console.log(event.keyCode);
	switch (key.which) {
		case 39:{
			x+=25;
			if(x >= maxX){
				x = maxX;
			}
			box.style.left = `${x}px`;
			break;
		}
		case 38:{
			y-=25;
			if(y<=0){
				y = 0;
			}
			box.style.top = `${y}px`;
			break;
		}
		case 37:{
			x-=25;
			if(x < 0){
				x = 0;
			}
				box.style.left = `${x}px`;
			break;
		}
		case 40:{
			y+=25;
			if (y>=maxY){
				y = maxY;
			}
			box.style.top = `${y}px`;
			break;
		}
	}
})