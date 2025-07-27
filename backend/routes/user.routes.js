const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Get all users (admin use-case)
router.get('/', userController.getAllUsers);

// Get a single user by ID
router.get('/:id', userController.getUserById);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;
