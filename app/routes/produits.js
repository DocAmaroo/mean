/**
 * Liste des produits
 * @param {*} app 
 * @param {*} db 
 */
module.exports = function (app, db) {
    app.get('/produits', (req, res) => {
        console.log('/produits');
        try {
            db.collection("produits")
            .find()
            .toArray( (err, documents) => {
                res.json(documents);
            });
        } catch (e) {
            console.log('Erreur sur /produits: ' + e);
            res.json([]);
        }
    })
}

/**
 * Liste des produits suivant une catégorie
 * @param {*} app 
 * @param {*} db 
 */
module.exports = function (app, db) {
    app.get("/produits/:categorie", (req, res) => {
        let categorie = req.params.categorie;
        console.log("/produits/" + categorie);
        try {
            db.collection("produits").find({
                type: categorie
            }).toArray((err, documents) => {
                res.json(documents);
            });
        } catch (e) {
            console.log("Erreur sur /produits/" + categorie + " : " + e);
            res.json([]);
        }
    });
}