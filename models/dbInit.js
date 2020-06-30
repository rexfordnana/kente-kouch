import mongoose from 'mongoose'
import BlogPost from './BlogPost.js'

import config from 'config';

const routing = config.get('dbConfig.routing');
const host = config.get('dbConfig.host');
const dbName = config.get('dbConfig.dbName');
const options = config.get('dbConfig.options');

const dbUri = `${routing}://${host}${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbUri, options).catch(error => console.log(error));

const db = mongoose.connection;

export default db