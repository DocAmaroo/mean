const Product = require('../models/productsModels');

/**
 * Return all products
 */
exports.getProducts = function (req, res) {
    Product
        .find()
        .then(function (err, products) {
            if (err) return res.status(500).send(err);
            return res.status(200).json(products);
        });
};


/**
 * Check if a product exist
 */
exports.checkProduct = function (req, res, next, productId) {
    try {
        Product.findOne({_id: productId}, function (err, product) {
            if (err) return res.status(500).send(err);
            if (!product) return res.status(404).json({
                ok: false,
                code: '404',
                message: "This product doesn't exist"
            });
            req.product = product;
            return next();
        })
    } catch (e) {
        return res.status(400).json({
            ok: false,
            message: e
        });
    }
}

/**
 * Return a specific product
 */
exports.getProduct = function (req, res) {
    return res.status(200).json(req.product);
}

/**
 * Add a product
 */
exports.addProduct = function (req, res) {
    const newProduct = new Product(req.body);
    newProduct.save(function (err, product) {
        if (err) return res.status(500).send(err);
        return res.status(201).json(product);
    })
}

/**
 * Return all products with specific categorie
 */
// exports.getProductsByType = function (req, res) {
//     let type = req.params.type;
//     try {
//         Products.find({
//             type: type
//         }).then(function(err, products) {
//             if(err) return res.status(500).send(err);
//             return res.status(200).json(products)
//         });
//     } catch (e) {
//         return res.status(400).json({
//             ok:false,
//             message:e
//         });
//     }
// };

/**
 * Return all categories
 */
// exports.getCategories = function (req, res) {
//     result = [];
//     try {
//         Products
//             .find()
//             .then(function(err, products) {
//                 if(err) return res.status(500).send(err);
//                 for (let product of products) {
//                     if (!result.includes(product.type))
//                         result.push(product.type);
//                 }
//                 if(result.length == 0) return res.status(204).json([]);
//                 return res.status(200).json(result);
//             });
//     } catch (e) {
//         return res.status(400).json({
//             ok:false,
//             message:e
//         });
//     }
// };