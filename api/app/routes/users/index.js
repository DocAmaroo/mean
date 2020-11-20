const router = require('express').Router();
const UsersController = require('../../controllers/usersController');


router.route('/login')
    .get(UsersController.signin)
    .post(UsersController.signup);

module.exports = router;