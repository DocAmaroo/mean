/**
 * Connexion
 * @param {*} app 
 * @param {*} db 
 */
module.exports = function(app, db) {
    app.post("/membre/connexion", (req, res) => {
        try {
            db.collection("membres")
                .find(req.body)
                .toArray((err, documents) => {
                    if (documents != undefined && documents.length == 1)
                        res.json({
                            "resultat": 1,
                            "message": "Authentification réussie"
                        });
                    else res.json({
                        "resultat": 0,
                        "message": "Email et/ou mot de passe incorrect"
                    });
                });
        } catch (e) {
            res.json({
                "resultat": 0,
                "message": e
            });
        }
    });
}