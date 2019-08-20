// function hello(name) {
// 	console.log(`Hello ${ name }`); //2015 ~ backticks and executing code $ { }
// 	console.log('hello ' + name); // append/concantenating an identifier var to a string
// }

// hello("James");

// // let jay = 'John'
// // console.log('hello ' + name);

function hello (name, country = 'Ghana') {
	console.log(`Hello ${ name } from ${ country }`);
}

hello("James");