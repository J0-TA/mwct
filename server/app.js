require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const index = require('./api');

mongoose
    .connect(`mongodb://localhost:27017/MWCT`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    }).catch(err => {
        console.error('Error connecting to Mongo', err)
    });


const whitelist = [
    'http://localhost:3000',
];
const corsOptions = {
    origin: function (origin, callback) {
        const originWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originWhitelisted);
    },
    credentials: false
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api', index);

module.exports = app;