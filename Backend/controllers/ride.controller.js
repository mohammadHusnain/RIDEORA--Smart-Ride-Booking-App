const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');

module.exports.createRide = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {userId , pickup, destination, vehicleType} = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user._id, // Assuming user is set by auth middleware
            pickup,
            destination,
            vehicleType
        });
        res.status(201).json({
            message: 'Ride created successfully',
            ride
        });
    } catch (error) {
        console.error('Error creating ride:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}