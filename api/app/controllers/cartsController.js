const User = require('../models/usersModels');

exports.checkUser = (req, res, next, userID) => {
    try {
        User.findOne({
            _id: userID
        }, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(404).json({
                ok: false,
                code: '404',
                message: "This user doesn't exist"
            });
            req.user = user;
            return next();
        })
    } catch (e) {
        return res.status(400).json({
            ok: false,
            message: e
        });
    }
}

exports.getCart = (req, res) => {
    return res.status(200).json(req.user);
}

exports.addToCart = (req, res) => {
    req.user.addToCart(req.body.product_id)
        .then( cart => {
            res.status(201).json(cart);
        }).catch(err => res.status(500).send(err));
}

exports.removeFromCart = (req, res) => {
    req.user.removeFromCart(req.body.product_id)
        .then( cart => {
            res.status(201).json(cart);
        }).catch(err => res.status(500).send(err));
}