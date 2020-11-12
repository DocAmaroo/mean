// const cartsRoute = require('./carts');
// const categoriesRoute = require('./categories');
// const membersRoute = require('./members');
const productsRoute = require('./products');


module.exports = function(app, db) {
    // Object.values(cartsRoute).forEach(f => f(app, db));
    // categoriesRoute(app, db);
    // Object.values(membersRoute).forEach(f => f(app, db));
    // Object.values(productsRoute).forEach(f => f(app, db));
    productsRoute(app, db);
}