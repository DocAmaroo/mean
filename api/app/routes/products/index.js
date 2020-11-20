const router = require('express').Router();
const productsController = require('../../controllers/productsController');

router.route('/products')
    .get(productsController.getProducts)
    .post(productsController.addProduct)

router.route('/productsName')
    .get(productsController.getProductsName)

router.route('/categories')
    .get(productsController.getCategories)

router.route('/search')
    .get(productsController.searchProduct)

router.param('type', productsController.checkCategorie);
router.route('/products/:type')
        .get(productsController.getProduct)

router.param('productId', productsController.checkProduct);
router.route('/products/:productId')
    .get(productsController.getProduct)

module.exports = router;