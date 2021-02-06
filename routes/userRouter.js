const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register User
router.post('/register', userController.registerUser);

// Login User
router.post('/login', userController.loginUser);

// Verify Token
router.get('/verify', userController.verifiedToken);

module.exports = router;