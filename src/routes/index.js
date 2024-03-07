const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authorization/auth');

router.post('/login', userController.login);

// router.use(auth);
// Define routes
router.get('/findPatient/:id', userController.getAllUsers);

module.exports = router;