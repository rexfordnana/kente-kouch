import express from 'express'
import BlogPost from '../models/BlogPost.js'
import {childLogger} from '../lib/logger.js'

const pagesRouter = express.Router();
const log = childLogger({op: 'routes'});
pagesRouter.get('/', async (req,res)=>{
    const blogPosts = await BlogPost.find({})
    log.info(blogPosts);
    res.render('pages/index', {blogs: blogPosts});
});

pagesRouter.get('/about', (req,res)=>{
    res.render('pages/about');
});

pagesRouter.get('/contact', (req,res)=>{
    res.render('pages/contact');
});

pagesRouter.get('/post', (req,res)=>{
    res.render('pages/post');
});

export default pagesRouter