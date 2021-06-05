const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/googlebooks'
)

const bookSeed = [
    {
        title: 'test',
        author: ['test'],
        image: 'test',
        link: 'test',
        description: 'test'
    },
    {
        title: 'test2',
        author: ['test2'],
        image: 'test2',
        link: 'test2',
        description: 'test2'
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log('Inserted records');
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(0)
    })