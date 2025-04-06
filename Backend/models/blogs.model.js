const mongoose = require('mongoose');

const blogSchema = new  mongoose.Schema({
    title: {type: String, required: true, unique: true},
    image: { type: String, required: true },
    description: {type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
},
    {Timestamp: true}
);

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;