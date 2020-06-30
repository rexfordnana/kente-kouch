import express from 'express'
import BlogPost from '../models/BlogPost.js'

const pagesRouter = express.Router();
pagesRouter.get('/', async (req,res)=>{
    const blogPosts = await BlogPost.find({})
    console.log(blogPosts)
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