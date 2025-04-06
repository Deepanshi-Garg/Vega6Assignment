const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({message: 'access denied'});

    try {        
        const decoded =  jwt.verify(token, process.env.JWT_TOKEN_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = validateUser;