const router = require('express').Router();
const UsersController = require('../../controllers/usersController');


router.route('/users/signin')
    .post(UsersController.signin);

router.route('/users/signup')
    .post(UsersController.signup);

module.exports = router;