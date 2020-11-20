const router = require('express').Router();
const membersController = require('../../controllers/membersController');

<<<<<<< HEAD
router.route('/member/auth')
    .post(membersController.checkMember);

router.route('/member/register')
    .post(membersController.createMember);

router.route('/members')
    .get(membersController.getMembers);


=======

router.route('/member/auth')
    .post(membersController.checkMember);

>>>>>>> Thominou
module.exports = router;