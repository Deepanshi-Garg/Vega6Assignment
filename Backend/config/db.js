const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.MONGODB_URL;

const connection = mongoose.connect(db_url);

module.exports = connection;