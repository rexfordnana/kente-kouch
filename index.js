import express from 'express'
import ejs from 'ejs'
import db from './models/dbInit.js'
import pagesRouter from './routes/pages.js'
import {childLogger} from './lib/logger.js'
import bodyParser from 'body-parser'

db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
const port = 3000 | process.env.port;

//use middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//define routes
app.use('/', pagesRouter);

const log = childLogger({op: 'In index js'});
log.info('starting app ...')
app.listen(port, () => {
    log.info({port: port}, 'App started and listening ...')
});