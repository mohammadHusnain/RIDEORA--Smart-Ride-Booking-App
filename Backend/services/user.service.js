const userModel = require('../models/user.model');

module.exports.createUser = async ({firstname, lastname, email, password}) => {
    try {
        // Validate input
        if (!firstname || !email || !password) {
            throw new Error('All fields are required');
        }
            // Create new user
            const user = new userModel({
                fullname: {
                    firstname,
                    lastname
                },
                email,
                password,
            });
    
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    };
