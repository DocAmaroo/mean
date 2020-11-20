const Products = require('../models/productsModels');

/**
 * Return all products
 */
exports.getProducts = function(req, res) {
    try {
        Products.find()
        .then(function(products) {
            res.json(products);
        });
    } catch (e) {
        console.log("[-]Error on /products: query didn't work properly\n" + e);
        res.json([]);
    }
};

/**
 * Return all products with specific categorie
 */
exports.getProductsByType = function (req, res) {
    let type = req.params.type;
    try {
        Products.find({
            type: type
        }).then(function(products) {
            res.json(products)
        });
    } catch (e) {
        console.log("[-]Error on /products/" + type + ": query didn't work properly\n" + e);
        res.json([]);
    }
};

/**
 * Return all categories
 */
exports.getCategories = function (req, res) {
    result = [];
    try {
        Products.find()
            .then(function(categories) {
                for (let categorie of categories) {
                    if (!result.includes(categorie.type)) 
                        result.push(categorie.type);
                }
                res.json(result);
            });
    } catch (e) {
        console.log("[-]Error on /categories: query didn't work properly\n" + e);
        res.json([]);
    }
};

/**
 * Check if a product exist
 */
exports.checkProduct = function(req, res, next, productId) {
    try {
        Products.findOne({_id:productId}, function (err, product) {
<<<<<<< HEAD
            //if(err) return res.status(500).send(err);
            if(product == null) return res.status(404).json({
=======
            if(err) return res.status(500).send(err);
            if(!product) return res.status(404).json({
>>>>>>> Thominou
                ok:false,
                code:'404',
                message:"This product doesn't exist"
            });
            req.product = product;
            return next();
        })
    } catch (e) {
        console.log("[-]Error on /categories: query didn't work properly\n" + e);
        res.json([]);
    }
}

<<<<<<< HEAD

=======
>>>>>>> Thominou
/**
 * Return a specific product
 */
exports.getProduct = function(req, res) {
    return res.status(200).json(req.product);
}