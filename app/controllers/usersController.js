const User = require('../models/usersModels');

/**
 * Handle member authentification
 */
exports.signin = function (req, res, next) {
    Users.find(req.body)
        .then(function (user) {
            if (user != undefined && user.length == 1) {
                res.status(200).json({
                    ok:true,
                    message:"Authentification success"
                });
                req.user = user;
                return next();
            }
            res.status(401).json({
                ok:false,
                message:"Incorrect mail/password"
            });
        })
}

exports.signup = (req, res, next) => {
    new User({
        name: req.body.name,
        firstname: req.body.firstname,
        mail: req.body.mail,
        password: req.body.password
    })
    .save()
    .then(result => {
        res.status(201).json(result);
    }).catch(err => console.log(err));
}