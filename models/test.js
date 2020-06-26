import mongoose from 'mongoose'
import BlogPost from './BlogPost.js'

import config from 'config';

const dbUri = config.get('dbConfig.routing') +
    '://' +
    config.get('dbConfig.host') +
    config.get('dbConfig.dbName') +
    '?retryWrites=true&w=majority';

mongoose.connect(dbUri, config.get('dbConfig.options')).
    catch(error => console.log(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const myWorstDay = new BlogPost({
    title: 'best day',
    author: 'rexford',
    body: 'something very good and unforgettable happened this day.'
})

// myWorstDay.save((err, blog) => {
//     if (err) return console.log(err)
//     console.log(blog);
// }
// );

BlogPost.find({ title: 'my worst day' }, (err, blog) => {
    if (err) return console.log(err)
    console.log(blog);
})
