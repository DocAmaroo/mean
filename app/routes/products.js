const express = require('express');
const router = express.Router();
const productsModels = require('../models/productsModels');

/**
 * Liste des produits
 */
router.get('/products', (req, res) => {
    try {
        productsModels.find()
        .then(function(products) {
            res.json(products);
        });
    } catch (e) {
        console.log("[-]Error on /products: query didn't work properly\n" + e);
        res.json([]);
    }
});


/**
 * Liste des produits filtrés par une catégorie
 */
router.get("/products/:type", (req, res) => {
    let type = req.params.type;
    try {
        productsModels.find({
            type: type
        }).then(function(products) {
            res.json(products)
        });
    } catch (e) {
        console.log("[-]Error on /products/" + type + ": query didn't work properly\n" + e);
        res.json([]);
    }
});

module.exports = router;