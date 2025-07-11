const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db')


connectToDb()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

require('dotenv').config();

module.exports = app;