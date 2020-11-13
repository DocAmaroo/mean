const router = require('express').Router();
const membersController = require('../../controllers/membersController');

router.route('/member/auth')
    .post(membersController.checkMember);

router.route('/member/register')
    .post(membersController.createMember);

router.route('/members')
    .get(membersController.getMembers);


module.exports = router;