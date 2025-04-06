const express = require('express');
const { upload } = require('../middlewares/uploadPic.middleware.js');
const validateUser = require('../middlewares/auth.middleware.js');
const { userSignup, userLogin, updateProfileImg } = require('../controllers/users.controller.js');

const userRouter = express.Router();

// user signup
userRouter.post('/signup', upload.single("profilePicUrl"), userSignup);

// user login
userRouter.post('/login', userLogin);

// updating profile image
userRouter.patch('/update/image', validateUser, upload.single("profilePicUrl"), updateProfileImg);

module.exports = userRouter;