import * as firebase from "firebase";

 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").push({
// 	description: "car payment",
// 	note: "last payment",
// 	amount: "445",
// 	createdAd: 155
// });

// database.ref("expenses").once("value").then((snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref("expenses").on("value", (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref().set({
// 	name: "Max",
// 	age: 31,
// 	stressLevel: 6,
// 	job: {
// 		title: "Software Developer",
// 		company: "Google"
// 	},
// 	location: {
// 		city: "Chicago",
// 		country: "USA"
// 	}
// }).then(() => {
// 	console.log("Data is saved.");
// }).catch((e) => {
// 	console.log("Error:", e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	"job/company": "Amazon",
// 	"location/city": "Seattle"
// });

// database.ref().on("value", (snapshot) => {
// 	const value = snapshot.val();
// 	console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// });

// setTimeout(() => {
// 	database.ref().update({
// 		name: "Mike",
// 		"job/company": "Google"
// 	});
// }, 3000);



// database.ref()
// 	.once("value")
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log("error fetching data", e);
// 	});
	
	
// database.ref("age").set(32);
// database.ref("location/city").set("Vernon Hills");
// database.ref("attributes").set({
// 	height: 73,
// 	weight: 200
// }).then(() => {
// 	console.log("Attributes saved.");
// }).catch((e) => {
// 	console.log(e);
// });

// database.ref("isMarried").remove();
