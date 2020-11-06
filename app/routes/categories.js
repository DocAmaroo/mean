/**
 * Liste des catégories de produits
 * @param {*} app 
 * @param {*} db 
 */
module.exports = function(app, db) {
    app.get("/categories", (req, res) => {
        categories = [];
        try {
            db.collection("produits")
                .find()
                .toArray((err, documents) => {
                    for (let doc of documents) {
                        if (!categories.includes(doc.type)) categories.push(doc.type);
                    }
                    res.json(categories);
                }
            );
        } catch (e) {
            console.log("Erreur sur /categories : " + e);
            res.json([]);
        }
    });
}