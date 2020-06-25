import express from 'express'
import ejs from 'ejs'

const app = express();

//use middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));

//define routes
app.get('/', (req,res)=>{
    res.render('pages/index');
});

app.get('/about', (req,res)=>{
    res.render('pages/about');
});

app.get('/contact', (req,res)=>{
    res.render('pages/contact');
});

app.get('/post', (req,res)=>{
    res.render('pages/post');
});

app.listen(3000, () => console.log('listening on port 3000...'));