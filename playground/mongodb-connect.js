// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// // use ObjectID() to create new object id 
// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	// in mongodb, there is no need to create a database before using it
	// mongo does not create database until we add data into it
	if (err) {
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');
	const db = client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	test: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })
	// 
	db.collection('Users').insertOne({
		// _id: 456 // can also specify object id, otherwise, mongoDB create one for you 
		name: 'Jay',
		age: 33,
		location: 'Worcester'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user data', err);
		}
		// console.log(JSON.stringify(result.ops, undefined, 2));
		// 
		// result.ops is all data got inserted
		console.log(result.ops[0]);
		console.log(result.ops[0]._id);
		console.log(result.ops[0]._id.getTimestamp()); // only available for mongo-created object id
	})

	client.close();
})