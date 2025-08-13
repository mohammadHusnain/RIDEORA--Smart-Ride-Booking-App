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

module.exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    if (!origin || !destination) {
        return res.status(400).json({ message: 'Origin and Destination are required' });
    }

    try {
        const formattedResult = await mapService.getDistanceAndTime(origin, destination);
        res.status(200).json(formattedResult);
    } catch (error) {
        console.error("Error in getDistanceAndTime:", error.message);
        res.status(500).json({ message: 'Error fetching distance and time' });
    }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

