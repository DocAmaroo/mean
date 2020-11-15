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


// exports.getCart = function (req, res) {
//     Carts.getCartById(req.body.member_id, function (err, cart) {
//         if (err) return res.status(500).send(err);
//         if (!cart) return res.status(404).json(err404());
//         res.status(201).json(cart);
//     })
// }

// exports.getCartByMemberId = function (req, res) {
//     Carts.getCartByMemberId(req.query.member_id, function (err, cart) {
//         if (err) return res.status(500).send(err);
//         if (!cart) return res.status(404).json(err404())
//         return res.status(201).json(cart);
//     });
// };