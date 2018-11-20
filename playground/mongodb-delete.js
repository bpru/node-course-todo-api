// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');
	const db = client.db('TodoApp');

	// delete
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(
	// 	result => console.log(result),
	// 	err => console.log('Unable to delete', err));

	// // deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(
	// 	result => console.log(result),
	// 	err => console.log(err));

	// // findOneAndDelete: this returns the delted object
	// db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then(
	// 	result => console.log(result),
	// 	err => console.log(err));
	// 	
	// 	
	db.collection('Users').deleteMany({name: "Jay"}).then(
		result => console.log(result),
		err => console.log(err));
	db.collection('Users').findOneAndDelete({_id: 456}).then(
		result => console.log(result),
		err => console.log(err));

	client.close();
})