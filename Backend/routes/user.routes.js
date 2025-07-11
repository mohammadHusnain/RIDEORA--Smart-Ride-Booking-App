const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
//  async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()});
//     }

//     try {
//         const {firstname, lastname, email, password} = req.body;
//         const user = await userService.createUser({firstname, lastname, email, password});
//         return res.status(201).json({message: 'User created successfully', user});
//     } catch (error) {
//         return res.status(500).json({message: 'Server error', error: error.message});
//     }
// },

userController.registerUser

);

module.exports = router;