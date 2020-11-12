const productsRoute = require('./products');
const categoriesRoute = require('./categories');
const membersRoute = require('./members');
const cartsRoute = require('./carts');


module.exports = function(app, db) {
    Object.values(productsRoute).forEach(f => f(app, db));
    categoriesRoute(app, db);
    Object.values(membersRoute).forEach(f => f(app, db));
    Object.values(cartsRoute).forEach(f => f(app, db));
}