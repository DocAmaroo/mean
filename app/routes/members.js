const express = require('express');
const router = express.Router();
const membersModels = require('../models/membersModels');

/**
 * Handle member authentification
 */
router.post('/member/auth', (req, res) => {
    console.log(req.body);
    try {
        membersModels.find(req.body)
            .then(function(members) {
                if (members != undefined && members.length == 1) {
                    res.send({
                        result: 1,
                        message: "Success",
                        idmember: members[0]._id
                    })
                }
                else res.json({
                    resultat: 0,
                    message: "Email et/ou mot de passe incorrect"
                });
            })
    } catch (e) {
        console.log("[-]Error on /member/auth: query didn't work properly\n" + e);
        res.json({
            resultat: 0,
            message: e
        });
    }
});

module.exports = router;