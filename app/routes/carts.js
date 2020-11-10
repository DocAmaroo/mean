//http://localhost:8888/cart?member=<number>
exports.getMemberCart = function (app, db) {
    app.get('/cart', (req, res) => {
        let id = req.query.member;

        if (id != undefined) {
            try {
                db.collection("carts")
                .find({
                    idmember: parseInt(id)
                })
                .toArray( (err, documents) => {
                    res.json(documents);
                });
            } catch (e) {
                console.log("[-]Error on /cart: query didn't work properly\n", e);
                res.json([]);
            }
        } else {
            console.log("[-]Error on /cart: Member id undefined");
            res.json([]);
        }
    })
}