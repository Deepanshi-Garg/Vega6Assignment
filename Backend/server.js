const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/db.js');
const userRouter = require('./routes/users.route.js');
const blogRouter = require('./routes/blogs.route.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/', userRouter);
app.use('/blogs', blogRouter);

app.listen(port, async() => {
    try {
        await connection;
        console.log('mongo db connected successfully!');
    } catch (error) {
        console.log('mongodb connection failed!: ', error);
    }
    console.log('server is running at port: ', port);
});