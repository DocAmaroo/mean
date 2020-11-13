const express = require('express');
const router = express.Router();
const categoriesModels = require('../models/productsModels');

/**
 * Liste des catégories de produits
 */
router.get("/categories", (req, res) => {
    result = [];
    try {
        categoriesModels.find()
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
});

module.exports = router;