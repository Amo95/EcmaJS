function printDetails(person){
	const age = (person.age ? person.age : 0);
	const country = (person.country ? person.country: 'Ghana');

	console.log (`Hello ${ person.name } from ${ country } with age ${ age } years old`);
}

printDetails({ name: 'James', age: '24' });