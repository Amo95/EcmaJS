// function printDetail(person){
// 	if (person.name) { 
// 		const age = ( person.age ? person.age: 0 );
// 		const country = ( person.country ? person.country: 'Ghana' );

// 		console.log(`Hello ${ person.name } from ${ country } with ${ age } years`);}
// 	else if (!person.name) { console.log( 'You entered nothing u dumb!!')};
// }

// printDetail({ name: 'James', age: '24' });

function detail(person) {
	if (!person.name) {  return 'Dude, you forgot ur freaking name' };
	const age = (person.age ? person.age: 0);
	const country = (person.country ? person.country: 'Ghana');

	return `Hello ${ person.name } from ${ country } with ${ person.age } years`;
}

message = detail({ name: 'James', age: '24' });
console.log(message);