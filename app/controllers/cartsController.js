const cartsModels = require('../models/cartsModels');

exports.getCarts = function (req, res) {
    let id = req.query.member;
    
    if (id != undefined) {
        try {
            cartsModels.find({ idmember: id })
            .then(function(carts) {
                res.json(carts);
            });
        } catch (e) {
            console.log("[-]Error on /cart: query didn't work properly\n", e);
            res.json([]);
        }
    } else {
        console.log("[-]Error on /cart: Member id undefined");
        res.json([]);
    }
};