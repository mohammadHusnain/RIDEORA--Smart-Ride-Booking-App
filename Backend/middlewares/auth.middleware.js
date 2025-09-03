const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const blacklistTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

if(!token){
    return res.status(401).json({ message: 'Unauthorized' });
}

// Make sure the field name matches your blacklistTokenModel schema, e.g., 'token' or '_token'
const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

if(isBlacklisted){
    return res.status(401).json({ message: 'Unauthorized' });
}

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id).select('-password')

        req.user = user;
        return next();
    }
    catch(err){
        return res.status(401).json({ message:'Unauthorized'})
    }

}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded.id);
        req.captain = captain;

        if (!captain) {
            return res.status(404).json({ message: 'Captain not found' });
        }

        req.captain = captain;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}