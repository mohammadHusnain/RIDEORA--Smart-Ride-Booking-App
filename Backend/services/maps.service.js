const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API; // This is your LocationIQ key for now
        const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

        const response = await axios.get(url);

        if (response.data && response.data.length > 0) {
            return {
                latitude: response.data[0].lat,
                longitude: response.data[0].lon
            };
        }

        return null;
    } catch (error) {
        console.error("Error in getAddressCoordinate:", error.message);
        throw error;
    }
};
