const router = require('express').Router();
const productsController = require('../../controllers/productsController');

router.route('/')
    .get(productsController.getProducts)
    .post(productsController.addProduct)

router.route('/productsName')
    .get(productsController.getProductsName)

router.route('/categories')
    .get(productsController.getCategories);

router.param('type', productsController.checkCategorie);
router.route('/categories/:type')
        .get(productsController.getProductsByType)

router.param('productId', productsController.checkProduct);
router.route('/:productId')
    .get(productsController.getProduct)

module.exports = router;