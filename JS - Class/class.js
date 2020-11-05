
// function showText(text, color, name_block) {
// 	let a = `<p class = "${color}">${text}</p>`;
// 	document.querySelector(`${name_block}`).innerHTML = a;
// }
// showText('Message', 'red', '.wrapper');
// showText('Hello World!', 'yellow', '.wrapper-2');


//CLASS
class ShowMessage{
	constructor(text, color, name_block){
		this.message = 	text; 
		this.cssStyle = 	color;
		this.out = 			name_block;
	}
	show(){
		document.querySelector(`${this.out}`).innerHTML = `<p class = "${this.cssStyle}">${this.message}</p>`;
		return this;
	}
}
class showMessageIcon extends ShowMessage{
	constructor(text, color, name_block, icon){
		super(text, color, name_block);
		this.icon = icon;
	}
	show(){
	document.querySelector(`${this.out}`).innerHTML = `<span class = "material-icons">${this.icon}</span><p class = "${this.cssStyle}">${this.message}</p>`;

	return this;
	}
}
let post_1 = new ShowMessage('Hello World', 'red', '.wrapper').show();
let post_2 = new showMessageIcon('Message!!', 'yellow', '.wrapper-2','android').show();
