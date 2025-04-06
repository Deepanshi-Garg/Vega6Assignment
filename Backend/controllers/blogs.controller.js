const { uploadImageCloud } = require('../middlewares/uploadPic.middleware.js');
const blogModel = require('../models/blogs.model.js');

const fetchAllBlogs = async (req, res) => {
    try {
        let blog = await blogModel.find({});
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const fetchMyBlogs = async (req, res) => {
    try {
        const { id } = req.user;
        let blog = await blogModel.find({ userId: id });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addBlog = async (req, res) => {
    try {
        const { id } = req.user;
        const { title, description } = req.body;
        if (!title || !description || !req.file) return res.status(400).json({ message: 'title, image and description are required!' });

        let blog = await blogModel.findOne({ title });
        if (blog) return res.status(400).json({ message: 'blog already exist' });

        const { url } = await uploadImageCloud(req.file.path, 'blogs');
        blog = await blogModel.insertOne({ title, description, image: url, userId: id });

        res.status(201).json({ message: 'new blog created successfully', blog });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const userId = req.user.id;
        const { title, description } = req.body;

        let blog = await blogModel.findById(req.params.id);
        if (blog.userId != userId) return res.status(401).json({ message: 'updation denied, only update your blogs' });

        if (req.file) {
            const { url } = await uploadImageCloud(req.file.path, 'blogs');
            blog.image = url;
        }

        if (title) blog.title = title;

        if (description) blog.description = description;

        await blog.save();
        res.status(200).json({ message: 'blog updated successfully', blog });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const userId = req.user.id;
        const blogId = req.params.id

        let blog = await blogModel.findById(blogId);
        if (blog.userId != userId) return res.status(401).json({ message: 'deletion denied, only delete your blogs' });

        await blogModel.findByIdAndDelete(blogId);
        res.status(200).json({ message: 'blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: err.message });
    }

};

module.exports = { fetchAllBlogs, fetchMyBlogs, addBlog, updateBlog, deleteBlog }