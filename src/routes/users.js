var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /users : List all users
router.get('/users', userController.listAllUsers);

// POST /users : Create a new user
router.post('/signUp', userController.signUp);

module.exports = router;
