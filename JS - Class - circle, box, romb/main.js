class RootElement{
	constructor(width, height, color, tagName = 'div'){
		this.width = 	width; 
		this.height = 	height;
		this.color = 	color;
		this.element = document.createElement(tagName);
		return this;
	}
	create(){
		this.element.style.transition = 'opacity 2s';
		this.element.style.width = this.element.style.height = `${this.width}px`;
		this.element.style.background = this.color;
		document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.element);
		return this;
	}
	hide(){
		this.element.style.opacity = '0';
	}
	show(){
		this.element.style.opacity = '1';
	}
}
class Box extends RootElement{
	constructor(width, height, color, tagName){
		super(width, height, color, tagName);
		this.element.style.margin = '20px';
		this.element.style.float = 'left';
	}
}
class Circle extends RootElement{
	constructor(width, height, color, tagName){
		super(width, height, color, tagName);
		this.element.style.borderRadius = '100px';
		this.element.style.margin = '20px';
		this.element.style.float = 'left';
	}
}
class Romb extends RootElement{
constructor(width, height, color, tagName){
		super(width, height, color, tagName);
		this.element.style.transform = 'rotate(45deg)';
		this.element.style.margin = '50px';
	}
}
let box = new Box(200, 200, 'red').create();
let circle = new Circle(200, 200, 'blue').create();
let romb = new Romb (200, 200, 'green').create();


box.element.addEventListener('mouseenter', () => {
	box.hide();
})
box.element.addEventListener('mouseleave', () => {
	box.show();
})
circle.element.addEventListener('mouseenter', () => {
	circle.hide();
})
circle.element.addEventListener('mouseleave', () => {
	circle.show();
})
romb.element.addEventListener('mouseenter', () => {
	romb.hide();
})
romb.element.addEventListener('mouseleave', () => {
	romb.show();
})




