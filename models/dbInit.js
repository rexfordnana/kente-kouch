import mongoose from 'mongoose'
import BlogPost from './BlogPost.js'
import {childLogger} from '../lib/logger.js'

import config from 'config';
const log = childLogger({op: 'dbInit'})

const routing = config.get('dbConfig.routing');
const pass = process.env.password || log.error('pass password')
const host = config.get('dbConfig.host');
const dbName = config.get('dbConfig.dbName');
const options = config.get('dbConfig.options');

const dbUri = `${routing}://admin:${pass}${host}${dbName}?retryWrites=true&w=majority`;
log.info('connection string: ', dbUri)
mongoose.connect(dbUri, options).catch(err => log.error({err: err}));

const db = mongoose.connection;

export default db