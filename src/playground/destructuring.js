// OBJECT DESTRUCTURING

// const person = {
// 	name: "Max",
// 	age: 31,
// 	location: {
// 		city: "Vernon Hills",
// 		temp: 35
// 	}
// };

// console.log(`${person.name} is ${person.age}.`); 

// const { name, age, } = person;
// const { name: firstName = "Annonymous", age, } = person;
// const name = person.name
// const age = person.age

// console.log(`${firstName} is ${age}.`);

// const { city, temp } = person.location;

// if (city && temp) {
// 	console.log(`It's ${temp} in ${city}.`);
// }

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }




// const book = {
// 	title: "Ego",
// 	author: "Ryan",
// 	publisher: {
// 		name: "Penguin"
// 	}
// };

// const { name: publisherName = "Self Published" } = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ["1 Jackson", "Chicago", "Illinois", "19411"];

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}.`);




const item = ["Coffee (hot)", "$2.00", "$2.50", "$3.00"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
