const router = require('express').Router();
const cartsController = require('../../controllers/cartsController');

router.param('userID', cartsController.checkUser);
router.route('/carts/:userID')
    .get(cartsController.getCart)
    .post(cartsController.addToCart)
    .delete(cartsController.removeFromCart);

module.exports = router;