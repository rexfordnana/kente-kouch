import mongoose from 'mongoose'
import BlogPost from './BlogPost.js'
import {childLogger as log} from '../lib/logger.js'

import config from 'config';

const routing = config.get('dbConfig.routing');
const pass = process.env.password || console.error('pass password')
const host = config.get('dbConfig.host');
const dbName = config.get('dbConfig.dbName');
const options = config.get('dbConfig.options');

const dbUri = `${routing}://${pass}${host}${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbUri, options).catch(err => log.error({err: err}));

const db = mongoose.connection;

export default db