const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: [true, 'First name is required'],
            minlength: [3, 'First name must be at least 3 characters'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters'],
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        minlength: [5, 'Email must be at least 5 characters'],
    },
    password: {
  type: String,
  required: [true, 'Password is required'],
  select: false  // ADD THIS
},

    socketId: {
        type: String,
        // required: true,
        select:false,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Vehicle color must be at least 3 characters'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Vehicle plate must be at least 3 characters'],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    location:{
        lat:{ type: Number},
        lng:{ type: Number}
    },

});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;