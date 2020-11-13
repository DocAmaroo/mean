const express = require('express');
const router = express.Router();

const routesCarts = require('./carts');
const routesCategories = require('./categories');
const routesMembers = require('./members');
const routesProducts = require('./products'); 

router.use(routesCarts);
router.use(routesCategories);
router.use(routesMembers);
router.use(routesProducts);

module.exports = router;