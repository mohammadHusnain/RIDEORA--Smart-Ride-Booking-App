const captainModel = require('../models/captain.model');
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



function formatDuration(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const parts = [];
  if (days) parts.push(`${days} day${days > 1 ? 's' : ''}`);
  if (hours) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  if (minutes && !days) parts.push(`${minutes} min`);
  return parts.join(' ') || '0 min';
}

module.exports.getDistanceAndTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and Destination are required and must be valid strings');
  }

  const apiKey = process.env.GOOGLE_MAPS_API; // your LocationIQ token

  // 1) Geocode origin
  const oGeo = await axios.get('https://us1.locationiq.com/v1/search', {
    params: { key: apiKey, q: origin, format: 'json' }
  });
  const oLat = oGeo.data[0].lat, oLon = oGeo.data[0].lon;

  // 2) Geocode destination
  const dGeo = await axios.get('https://us1.locationiq.com/v1/search', {
    params: { key: apiKey, q: destination, format: 'json' }
  });
  const dLat = dGeo.data[0].lat, dLon = dGeo.data[0].lon;

  // 3) Matrix with distances + durations
  const matrixUrl =
    `https://us1.locationiq.com/v1/matrix/driving/${oLon},${oLat};${dLon},${dLat}` +
    `?annotations=distance,duration&key=${apiKey}`;

  const { data } = await axios.get(matrixUrl);

  // Prefer matrix distances; fallback to directions if missing
  let distanceMeters = data?.distances?.[0]?.[1];
  let durationSeconds = data?.durations?.[0]?.[1];

  if (typeof distanceMeters !== 'number' || typeof durationSeconds !== 'number') {
    // Fallback – Directions API returns route distance/duration
    const dirUrl =
      `https://us1.locationiq.com/v1/directions/driving/${oLon},${oLat};${dLon},${dLat}` +
      `?key=${apiKey}&steps=false&overview=false`;
    const dirRes = await axios.get(dirUrl);
    const route = dirRes.data?.routes?.[0];
    distanceMeters = route?.distance;
    durationSeconds = route?.duration;
  }

  if (typeof distanceMeters !== 'number' || typeof durationSeconds !== 'number') {
    throw new Error('Unable to compute distance/duration');
  }

  return {
    distance: {
      text: `${(distanceMeters / 1000).toLocaleString()} km`,
      value: Math.round(distanceMeters)
    },
    duration: {
      text: formatDuration(Math.round(durationSeconds)),
      value: Math.round(durationSeconds)
    },
    status: 'OK'
  };
};



module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API; 
    const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${encodeURIComponent(input)}&limit=5&format=json`;

    try {
        const response = await axios.get(url);

        // LocationIQ returns an array directly, no `status` or `predictions`
        if (Array.isArray(response.data)) {
            // Extract the `display_name` field for suggestions
            return response.data
                .map(place => place.display_name)
                .filter(Boolean);
        } else {
            throw new Error('Unexpected response format from LocationIQ');
        }

    } catch (err) {
        console.error('Error fetching autocomplete suggestions:', err.message);
        throw err;
    }
};


module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    if (ltd == null || lng == null) {
        throw new Error("Latitude and Longitude are required");
    }

    // radius in km
    const captains = await captainModel.find({
        "location.ltd": { $exists: true, $ne: null },
        "location.lng": { $exists: true, $ne: null },
        location: {
            $geoWithin: {
                $centerSphere: [ [ lng, ltd ], radius / 6371 ]  // NOTE: [lng, lat]
            }
        }
    });

    return captains;
};
