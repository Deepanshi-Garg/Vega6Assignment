const bcrypt = require('bcrypt');
const { uploadImageCloud } = require('../middlewares/uploadPic.middleware.js');
const userModel = require('../models/users.model.js');
const jwt = require('jsonwebtoken');

const userSignup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'email and password are required!' });

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let user = await userModel.findOne({ email });
        if (user) return res.status(400).json({ message: 'user already exist' });

        if (req.file) {
            const { url } = await uploadImageCloud(req.file.path, 'users');
            user = await userModel.insertOne({ email, password: hash, profilePicUrl: url });
        }
        else {
            user = await userModel.insertOne({ email, password: hash });
        }
        res.status(201).json({ message: 'new user created successfully', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'email and password are required!' });

        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compareSync(password, user.password))) return res.status(401).json({ message: 'invalid credentials' });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_TOKEN_KEY);
        res.status(200).json({ message: 'user logged in successfully', user, token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProfileImg = async (req, res) => {
    try {
        const { id } = req.user;

        if (!req.file) {
            return res.status(400).json({ message: 'User profile image is required' });
        }

        const { url } = await uploadImageCloud(req.file.path, 'users');
        let user = await userModel.findByIdAndUpdate(id, { profilePicUrl: url }, { new: true });
        res.status(200).json({ message: 'user profile image updated successfully', user });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { userSignup, userLogin, updateProfileImg }