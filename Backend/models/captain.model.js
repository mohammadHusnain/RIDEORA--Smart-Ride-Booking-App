const { select } = require('framer-motion/client');
const mongoose = require('mongoose');
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
        unique: true,
        lowercase:true,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number']
    },
    socketId: {
        type: String,
        required: true,
        select:false,
    }
});