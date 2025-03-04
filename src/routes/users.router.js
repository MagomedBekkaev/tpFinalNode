var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Afficher le profile de l'utilisateur
router.get("/", auth, userController.getProfile)

// Afficher tout les users
router.get('/', userController.listAllUsers);
// router.get('/users/:id', userController.getUserById);

// Créer un nouveau user
router.post('/signUp', userController.signUp);

// Se connecter
router.post('/signIn', userController.signIn);

module.exports = router;
