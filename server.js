// express
const express = require('express');
const app = express();
const port = 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// mongodb
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');

MongoClient.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
    
    let db = database.db("SUPERVENTES");
    
    if (err) return console.log(err);

    require('./app/routes')(app, db);
});


app.listen(port, () => {
    console.log("server listening on: " + port);
});