const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const { NativeAnimationExtended } = require('framer-motion');
const userRoutes =  require('./routes/user.routes')

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users' , userRoutes);

require('dotenv').config();

module.exports = app;