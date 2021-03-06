//--- ENV
require('dotenv/config');

//--- EXPRESS
const express = require('express');
const app = express();
const routes = require('./app/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-type', 'application/json');
    next();
});

//--- ROUTES
app.use(routes);

//--- DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex: true
    }, (err, database) => {
    if (err) return console.log(err);
    else console.log("[+]Connect to DB!");
});
mongoose.Promise = global.Promise;

//--- LISTENING
app.listen(process.env.PORT, () => {
    console.log("[+]Server listening on: " + process.env.PORT);
});