// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');
	const db = client.db('TodoApp');

	// .find() returns a cursor and toArray() turns data into array 

	// fetch all data in Todos collection
	db.collection('Todos').find().toArray().then(docs => {
		console.log('Todos:');
		console.log(JSON.stringify(docs, undefined, 2));
	}, err => {
		console.log('Unable to fetch data', err);
	})
	
	// fetch data with completed: true
	db.collection('Todos').find({completed: true}).toArray().then(docs => {
		console.log('Completed:');
		console.log(JSON.stringify(docs, undefined, 2));
	}, err => console.log('Unable to fetch data', err));

	// fetch data by object id
	db.collection('Todos').find({_id: new ObjectID('5bf3fa9f08f6a21431d146fa')})
		.toArray().then(docs => {
			console.log('Item with _id: bf3fa9f08f6a21431d146fa');
			console.log(JSON.stringify(docs, undefined, 2));
		}, err => console.log('Unable to fetch data', err));

	// use cursor.count() to return the number of a returned querry
	db.collection('Todos').find().count().then(count => {
		console.log(`Number of items in todos: ${count}`);
	}, err => console.log('Unable to fetch data', err));

	// fetch by name
	db.collection('Users').find({name: 'Jay'}).toArray().then(
		docs => console.log(JSON.stringify(docs, undefined, 2)),
		err => console.log('Unable to fetch data', err));

	client.close();
})