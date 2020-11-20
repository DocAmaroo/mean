const router = require('express').Router();

const routesCarts = require('./carts');
const routesUsers = require('./users');
const routesProducts = require('./products'); 

router.use(routesCarts);
router.use(routesUsers);
router.use(routesProducts);

module.exports = router;