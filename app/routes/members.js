/**
 * Connexion
 * @param {*} app 
 * @param {*} db 
 */
exports.authentificaion = function(app, db) {
    app.post("/member/auth", (req, res) => {
        try {
            db.collection("members")
                .find(req.body)
                .toArray((err, documents) => {
                    if (documents != undefined && documents.length == 1) {
                        res.send({
                            result: 1,
                            message: "Success",
                            idmember: documents[0].id
                        })
                    }
                    else res.json({
                        "resultat": 0,
                        "message": "Email et/ou mot de passe incorrect"
                    });
                });
        } catch (e) {
            console.log("[-]Error on /member/auth: query didn't work properly\n" + e);
            res.json({
                "resultat": 0,
                "message": e
            });
        }
    });
}