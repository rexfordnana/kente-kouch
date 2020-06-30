import express from 'express'
import ejs from 'ejs'
import db from './models/dbInit.js'
import pagesRouter from './routes/pages.js'

db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
const port = 3000 | process.env.port;

//middleware to use ejs and view static files
app.set('view engine', 'ejs');
app.use(express.static('public'));

//define routes
app.use('/', pagesRouter);

app.listen(port, () => console.log(`listening on port ${port}...`));