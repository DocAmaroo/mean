exports.getCart = (req, res) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            res.status(201).json(user.cart);
        })
        .catch(err => res.status(500).send(err));
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