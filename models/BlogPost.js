import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    comments: [{ body: String, date: Date }],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});


const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

export default BlogPost