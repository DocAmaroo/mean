const router = require('express').Router();
const productsController = require('../../controllers/productsController');

router.route('/')
    .get(productsController.getProducts)
    .post(productsController.addProduct)

// router.route('/categories')
//     .get(productsController.getCategories);

router.param('productId', productsController.checkProduct);
router.route('/:productId')
    .get(productsController.getProduct)

module.exports = router;