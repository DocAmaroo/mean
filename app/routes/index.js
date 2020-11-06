const productsRoute = require('./produits');
const categoriesRoute = require('./categories');
const membresRoute = require('./membres');

module.exports = function(app, db) {
    productsRoute(app, db);
    categoriesRoute(app, db);
    membresRoute(app, db);
}