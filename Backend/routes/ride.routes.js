const express = require('express');
const { body, query, validationResult } = require('express-validator');
const router = express.Router(); 

const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Create Ride
router.post(
  "/create",
  authMiddleware.authUser,   // ✅ Get userId from JWT instead of request body
  [
    body("pickup")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid Pickup Address"),
    body("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid Destination Address"),
    body("vehicleType")
      .isString()
      .isIn(["auto", "car", "moto"])
      .withMessage("Invalid Vehicle Type"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    // ✅ Attach userId from token into req.body for controller
    req.body.userId = req.user.id;  

    next();
  },
  rideController.createRide
);

// Get Fare
router.get(
  '/get-fare',
  authMiddleware.authUser,
  [
    query('pickup')
      .isString()
      .isLength({ min: 3 })
      .withMessage('Invalid pickup address'),
    query('destination')
      .isString()
      .isLength({ min: 3 })
      .withMessage('Invalid destination address'),
  ],
  rideController.getFare
);

module.exports = router;
