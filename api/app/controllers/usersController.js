const User = require('../models/usersModels');

/**
 * Handle member authentification
 */
exports.signin = function (req, res, next) {
    User.find(req.body)
        .then(result => {
            if (result !== undefined && result.length === 1) {
                req.user = result[0]._id;
                const obj = {
                    _id: result[0]._id,
                    name: result[0].name,
                    firstname: result[0].firstname,
                    mail: result[0].mail
                }
                res.status(201).json(obj);
                return next();
            }
            res.status(401).json({
                ok: false,
                message: "Email ou mot de passe incorrect!"
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
            const obj = {_id: result._id, name: result.name, firstname: result.firstname, mail: result.mail}
            res.status(201).json(obj);
        })
        .catch(err => {
            res.status(401).json({
                ok: false,
                message: "L'utilisateur avec l'email demandée existe déjà!"
            });
            console.log(err);
        })
}