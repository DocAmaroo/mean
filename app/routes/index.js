const router = require('express').Router();

const routesCarts = require('./carts');
const routesMembers = require('./members');
const routesProducts = require('./products'); 

router.use(routesCarts);
router.use(routesMembers);
router.use(routesProducts);

module.exports = router;