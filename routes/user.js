const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// http://localhost:3000/api/v1/users

router.get("/" , userController.getAllUsers );
router.post("/register" , userController.register );
router.post("/login" , userController.login );
router.get("/:userId" , userController.getUserById );

module.exports = router;