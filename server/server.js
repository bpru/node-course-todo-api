const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/User');
const { Todo } = require('./models/Todo') ;

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	})
	todo.save().then(doc => {
		res.status(200).send(doc);
	}, err => {
		res.status(400).send(err);
	})
})

app.get('/todos', (req, res) => {
	Todo.find().then(todos => {
		res.status(200).send({todos})
	}, err => res.status(400).send(err));
})

app.listen(3000, () => {
	console.log('Listening on port 3000...');
})

module.exports = {app};









// // build model
// let Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 		trim: true // remove leading and trailing spaces
// 	}, 
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// })

// create new entry
// let newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then(
// 	doc => console.log(doc),
// 	err => console.log(err));

// let otherTodo = new Todo({
// 	text: ' test'
// });

// otherTodo.save().then(
// 	doc => console.log(JSON.stringify(doc, undefined, 2)),
// 	err => console.log(err));
// 	
// User model
// let User = mongoose.model('User', {
// 	email: {
// 		type: String,
// 		minlength: 1,
// 		required: true,
// 		trim: true
// 	}
// });

// let user = new User({
// 	email: "bpru7443@gmail.com"
// });
// user.save().then(
// 	res => console.log(res),
// 	err => console.log(err));