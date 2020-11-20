//--- ENV
require('dotenv/config');

//--- EXPRESS
const express = require('express');
const app = express();
const routes = require('./app/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    //[TEMP] mock user
    const User = require('./app/models/usersModels');
    User.findById('5fb787d702aaa1127e9f4c9a')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
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