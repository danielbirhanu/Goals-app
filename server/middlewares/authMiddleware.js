const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check if authorization header exists and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from the authorization header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token and exclude the password
            req.user = await User.findById(decoded.id).select('-password');

            // Call next middleware
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized');
        }
    } 

    // If no token was provided
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

module.exports = { protect };
