const router = require('express').Router();
const membersController = require('../../controllers/membersController');


router.route('/member/auth')
    .post(membersController.checkMember);

module.exports = router;