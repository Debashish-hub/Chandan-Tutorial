const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes');

dotenv.config();

const port = 3000;

const app = express();

mongoose.connect(
    process.env.DB_CONNECT, 
    { useUnifiedTopology: true, useNewUrlParser: true}, 
    () => console.log('connected to db') 
);

app.use(express.static('WebFiles'));
app.use(morgan('dev'));
app.use(bodyParser.json());


// middle ware for routes
app.use('/', route);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/WebFiles/home_page.html'));
});

app.listen(port);
console.log('Listening on port ' + port + '...');