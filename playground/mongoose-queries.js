const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

let id = '5bf58e0484ae2809234e35c1';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// find() returns a list
// Todo.find().then(todos => console.log('All todos', todos));

// Todo.find({
//     _id: id
// }).then(todo => console.log('todo', todo));

// // find one
// Todo.findOne({
//     _id: id
// }).then(todo => console.log('todo', todo));

// .findById()
Todo.findById(id)
    .then(
        todo => {
            if (!todo) {
                return console.log('ID not found');
            }
            console.log('todo', todo);
        })
    .catch(err => console.log(err));

let userId = '5bf477803b09cd3b5de52f43';
// 
if (!ObjectID.isValid(userId)) {
    console.log('Invalid user ID');
}

User.findById(userId)
    .then(user => {
            if (!user) {
               return console.log('User ID not found');
            }
            console.log(user);
        }, err => console.log(err));
        