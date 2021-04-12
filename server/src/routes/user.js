const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.post('/addUser', UserController.addUser);

module.exports = router;
