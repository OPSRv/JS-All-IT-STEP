class PrintMaсhine{
	constructor (text, fontSize, fontColor, fontFamily, box){
		this.text = text;
		this.fontSize = fontSize;
		this.fontColor = fontColor;
		this.fontFamily = fontFamily;
		this.box = box;
	}
	print(){
		let out = document.querySelector(`${this.box}`);
		out.innerHTML = `<p>${this.text}</p>`;
		out.style.fontSize = `${this.fontSize}`;
		out.style.color = `${this.fontColor}`;
		out.style.fontFamily = `${this.fontFamily}`;
		return this; 
	}
}
let print = new PrintMaсhine('Hello','16px','green', 'Arial', '.box1').print();
let print1 = new PrintMaсhine('Hello','26px','red', 'Arial', '.box2').print();
let print2 = new PrintMaсhine('Hello','36px','yellow', 'Arial', '.box3').print();
let print3 = new PrintMaсhine('Hello','46px','pink', 'Arial', '.box4').print();
let print4 = new PrintMaсhine('Hello','56px','aqua', 'Arial', '.box5').print();