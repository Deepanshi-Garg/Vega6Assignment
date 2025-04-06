const express = require('express');
const { upload } = require('../middlewares/uploadPic.middleware.js');
const validateblog = require('../middlewares/auth.middleware.js');
const { fetchAllBlogs, fetchMyBlogs, addBlog, updateBlog, deleteBlog } = require('../controllers/blogs.controller.js');

const blogRouter = express.Router();

// fetching all blogs
blogRouter.get('/', fetchAllBlogs);

// middleware for authentication
blogRouter.use(validateblog);

// fetching blogs of a user
blogRouter.get('/my-blogs', fetchMyBlogs);

// creating blog
blogRouter.post('/add', upload.single("image"), addBlog);

// updating blog
blogRouter.patch('/update/:id', upload.single("image"), updateBlog);

// deleting blog
blogRouter.delete('/delete/:id', deleteBlog);

module.exports = blogRouter;