// const http = require('http');
// const app = require('./App');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes
app.use('/api', items);

const PORT = process.env.PORT || 8000;

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(result => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('Error on MongoDB Connection')
    })

// app.get('/', (req, res) => res.js)
// const server = http.createServer(app);

app.listen(PORT, () => console.log('Server Started'));