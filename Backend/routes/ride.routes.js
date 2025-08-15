const express = require('express');
const { body, query } = require('express-validator'); // ✅ Combine imports
const router = express.Router();

const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Create Ride
router.post(
  '/create',
  authMiddleware.authUser,
  body('userId')
    .isString()
    .isLength({ min: 1, max: 25 })
    .withMessage('Invalid User ID'),
  body('pickup')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid Pickup Address'),
  body('destination')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid Destination Address'),
  body('vehicleType')
    .isString()
    .isIn(['auto', 'car', 'moto'])
    .withMessage('Invalid Vehicle Type'),
  rideController.createRide
);

// Get Fare
router.get(
  '/get-fare',
  authMiddleware.authUser,
  query('pickup')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid pickup address'),
  query('destination')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid destination address'),
  rideController.getFare
);

module.exports = router;
