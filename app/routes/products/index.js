const router = require('express').Router();
const productsController = require('../../controllers/productsController');

router.route('/products')
    .get(productsController.getProducts);

router.route('/categories')
    .get(productsController.getCategories);

router.param('productId', productsController.checkProduct);
router.route('/products/:productId')
<<<<<<< HEAD
    .get(productsController.getProduct);
=======
    .get(productsController.getProducts);
>>>>>>> Thominou

module.exports = router;