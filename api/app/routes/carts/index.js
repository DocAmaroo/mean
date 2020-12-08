const router = require('express').Router();
const cartsController = require('../../controllers/cartsController');

router.param('userID', cartsController.checkUser);
router.route('/carts/:userID')
    .get(cartsController.getCart)
    .put(cartsController.addToCart)
    .post(cartsController.removeFromCart);

router.param('userID', cartsController.checkUser);
router.route('/carts/remove/:userID')
    .get(cartsController.emptiedCart);

module.exports = router;