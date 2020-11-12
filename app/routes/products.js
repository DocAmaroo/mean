/**
 * Liste des produits
 * @param {*} app 
 * @param {*} db 
 */
exports.getProducts = function (app, db) {
    console.log("/products");
    app.get('/products', (req, res) => {
        try {
            db.collection("products")
            .find()
            .toArray( (err, documents) => {
                res.json(documents);
            });
        } catch (e) {
            console.log("[-]Error on /products: query didn't work properly\n" + e);
            res.json([]);
        }
    })
}

/**
 * Liste des produits suivant une catégorie
 * @param {*} app 
 * @param {*} db 
 */
exports.getProductsFilter = function (app, db) {
    app.get("/products/:categorie", (req, res) => {
        let categorie = req.params.categorie;
        try {
            db.collection("products").find({
                type: categorie
            }).toArray((err, documents) => {
                res.json(documents);
            });
        } catch (e) {
            console.log("[-]Error on /products/" + categorie + ": query didn't work properly\n" + e);
            res.json([]);
        }
    });
}