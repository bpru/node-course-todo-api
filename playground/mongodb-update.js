// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5bf4363708f6a21431d15404")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then(result => console.log(result), err => console.log(err));
	// 
	db.collection('Users').findOneAndUpdate({
		name: 'Jay'
	}, {
		$set: {
			name: 'Old Jay'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(result => console.log(result), err => console.log(err));

	client.close();
})
