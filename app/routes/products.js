const express = require('express');
const productModels = require('../models/productsModels');
const router = express.Router();
const productsModels = require('../models/productsModels');

/**
 * Liste des produits
 * @param {*} app 
 * @param {*} db 
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
 * Liste des produits suivant une catégorie
 * @param {*} app 
 * @param {*} db 
 */
router.get("/products/:categorie", (req, res) => {
    let categorie = req.params.categorie;
    try {
        productModels.find({
            type: categorie
        }).then(function(products) {
            res.json(products)
        });
    } catch (e) {
        console.log("[-]Error on /products/" + categorie + ": query didn't work properly\n" + e);
        res.json([]);
    }
});

module.exports = router;