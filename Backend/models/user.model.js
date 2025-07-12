const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
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
            select:false, // Exclude password from queries by default
        },
       socketId:{
           type:String
       },
});


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET,)
        return token;
}
// Compare password method
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;