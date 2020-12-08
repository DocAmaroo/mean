const router = require('express').Router();
const productsController = require('../../controllers/productsController');

router.route('/products')
    .get(productsController.getProducts)
    .post(productsController.addProduct)

router.route('/categories')
    .get(productsController.getCategories);

router.route('/search')
    .get(productsController.searchProduct)

router.param('categorie', productsController.checkCategorie)
router.route('/products/:categorie')
    .get(productsController.getProduct);

router.param('productId', productsController.checkProduct);
router.route('/products/product/:productId')
    .get(productsController.getProduct)

module.exports = router;