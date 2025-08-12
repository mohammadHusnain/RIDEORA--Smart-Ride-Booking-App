const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        // Call service
        const coordinates = await mapService.getAddressCoordinate(address);

        if (!coordinates) {
            return res.status(404).json({ message: 'Coordinates not found' });
        }

        res.status(200).json(coordinates);
    } catch (error) {
        console.error("Error in getCoordinates:", error.message);
        res.status(500).json({ message: 'Error fetching coordinates' });
    }
};
