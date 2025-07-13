const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
userController.registerUser

);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
 userController.loginUser);

module.exports = router;

router.get('/profile', authMiddleware.authUser ,async (req, res) => {
    res.status(200).json(req.user);
});

router.get('/logout', authMiddleware.authUser , userController.logoutUser);