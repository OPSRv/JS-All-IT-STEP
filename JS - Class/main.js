// function getAge(year) {
// let age = new Date().getFullYear() - year;
// return age;
// }
// console.log(getAge(1998));

let getAge = (year) => {
	let age = new Date().getFullYear() - year;
return age;
}console.log(getAge(1998));