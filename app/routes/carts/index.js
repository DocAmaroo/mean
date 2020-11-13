const router = require('express').Router();
const cartsController = require('../../controllers/cartsController');

//http://localhost:8888/cart?member=<number>
router.route('/cart')
    .get(cartsController.getCarts);

module.exports = router;