const Members = require('../models/membersModels');

/**
 * Handle member authentification
 */
exports.checkMember = function (req, res) {
    try {
        Members.find(req.body)
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
};

exports.createMember = function(req, res) {
    let tmp_mail = req.query.mail;
    try {
        Members.findOne({mail:tmp_mail}, function (err, product) {
            if(err) return res.status(500).send(err);
            if(product != null) 
                return res.status(404).json({
                    ok:false,
                    code:'404',
                    message:"This mail is already use."
                });
            else{
                let tmp_name = req.query.name;
                let tmp_firstname = req.query.firstname;
                let tmp_password = req.query.password;
        
                var newMember = new Members();
                newMember.name = tmp_name;
                newMember.firstname = tmp_firstname;
                newMember.mail = tmp_mail;
                newMember.password = tmp_password;
        
                newMember.save(function (err) {
                    if(err) return res.status(500).send(err);
                    else console.log("[+]Member registered\n");
                    return res.status(201);
                })
            }
        });
    } catch (e) {
        console.log("[-]Error on /member/register: query didn't work properly\n" + e);
        res.json({
            resultat: 0,
            message: e
    });
}
};

/**
 * Return all members
 */
exports.getMembers = function(req, res) {
    try {
        Members.find()
        .then(function(m) {
            res.json(m);
        });
    } catch (e) {
        console.log("[-]Error on /members: query didn't work properly\n" + e);
        res.json([]);
    }
};