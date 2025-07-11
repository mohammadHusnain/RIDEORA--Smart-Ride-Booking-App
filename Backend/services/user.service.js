const userModel = require('../models/user.model');

module.exports.createUser = async (req, res) => {
    try {
        const {firstname, lastname , email, password} = req.body;

        // Validate input
        if (!firstname || !email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }

            // Check if user already exists
            // const existingUser = await userModel.findOne({email});
            // if (existingUser) {
            //     return res.status(400).json({message: 'User already exists'});
            // }
    
            // // Hash password
            // const hashedPassword = await userModel.hashPassword(password);
    
            // Create new user
            const user = new userModel({
                fullname: {
                    firstname,
                    lastname
                },
                email,
                password: hashedPassword,
            });
    
            await user.save();
    
            return res.status(201).json({message: 'User created successfully', user});
        } catch (error) {
            return res.status(500).json({message: 'Server error', error: error.message});
        }
    };
    