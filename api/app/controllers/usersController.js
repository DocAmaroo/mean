const User = require('../models/usersModels');

/**
 * Handle member authentification
 */
exports.signin = function (req, res, next) {
    User.find(req.body)
        .then(function (result) {
            if (result != undefined && result.length == 1) {
                req.user = result[0]._id;
                res.status(200).json(result[0]);
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
            req.user = result._id;
            res.status(201).json(result);
        }).catch(err => console.log(err));
}