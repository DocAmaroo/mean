const router = require('express').Router();
const cartsController = require('../../controllers/cartsController');


router.route('/cart')
    .get(cartsController.getCart)
    .post(cartsController.addToCart)
    .delete(cartsController.removeFromCart);

module.exports = router;