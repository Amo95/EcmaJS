function printDetail(person){
	//adding a condition
	if (!person.name) { return 'You forgot damn your name' };
	//if (!person.name) { return 'You forgot damn your name' };

	const age = ( person.age ? person.age: 0);
	const country = ( person.country ? person.country: 'Ghana');

	return `Hello ${ person.name } from ${ country } with age ${ age } years`;
	console.log('You made it here BOSS!!!')
}

const message = printDetail({ name: 'James', age: '24' });
console.log(message);
