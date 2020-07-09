import express from 'express'
import BlogPost from '../models/BlogPost.js'
import {childLogger} from '../lib/logger.js'

const pagesRouter = express.Router();
const log = childLogger({op: 'routes'});
pagesRouter.get('/', async (req,res)=>{
    const blogPosts = await BlogPost.find({})
    log.info(blogPosts);
    res.render('pages/index', {blogPosts});
});

pagesRouter.get('/about', (req,res)=>{
    res.render('pages/about');
});

pagesRouter.get('/contact', (req,res)=>{
    res.render('pages/contact');
});

pagesRouter.get('/post/get/:id', async (req,res)=>{
    log.info(req.params)
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('pages/post',{blogpost});
});

pagesRouter.get('/post/new', (req,res)=>{
    // log.info(req.body);
    res.render('pages/create');
    // res.redirect('pages/index');
});

pagesRouter.post('/posts/store', async (req,res)=>{
    log.info('We in the posts');
    const newPost = new BlogPost(req.body);
    console.log(newPost)
    await newPost.save();
    res.redirect('/');
});

export default pagesRouter