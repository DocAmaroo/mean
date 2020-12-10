const User = require('../models/usersModels');

exports.checkUser = (req, res, next, userid) => {
    try {
        User.findOne({_id: userid}, function (err, user) {
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
    return res.status(200).json(req.user.cart);
}

exports.addToCart = (req, res) => {
    req.user.addToCart(req.body.product_id)
        .then(isOk => {
            if (isOk)
                res.status(201).json({ok: true, message: "item added"});
            else
                res.status(404).json({ok: false, code: "404", message: "couldn't add product"});
        }).catch(err => res.status(500).send(err));
}

exports.removeFromCart = (req, res) => {
    req.user.removeFromCart(req.body.product_id)
        .then(isOk => {
            if (isOk)
                res.status(201).json({ok: true, message: "item removed"});
            else
                res.status(404).json({ok: false, code: "404", message: "couldn't remove product"});
        }).catch(err => res.status(500).send(err));
}

exports.emptiedCart = (req, res) => {
    req.user.cart.items = [];
    req.user.save();

    res.status(201).json({ok: true, message: "Cart has been emptied"});
}