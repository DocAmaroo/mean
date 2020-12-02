const User = require('../models/usersModels');

/**
 * Handle member authentification
 */
exports.signin = function (req, res, next) {
    User.find(req.body)
        .then(function (user) {
            if (user != undefined && user.length == 1) {
                res.status(200).json(user[0]);
                return next();
            }
            res.status(401).json({
                ok: false,
                message: "Incorrect mail/password"
            });
        })
}

exports.signup = (req, res, next) => {
    new User({
            "firstname": req.body.firstname,
            "name": req.body.name,
            "mail": req.body.mail,
            "password": req.body.password
        })
        .save()
        .then(result => {
            res.status(201).json(result);
        }).catch(err => console.log(err));
}