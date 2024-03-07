const userService = require('../services/index');
const jwt = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');
require('dotenv').config();

// Controller actions
const getAllUsers = (req, res) => {
    console.log('req',req)
    const { id }   = req.params;
    const user = userService.getAllUsers(id);
    
    res.send(user);

};

const login = (req, res) => {
    const options = {
        expiresIn: '10h' // Token expiration time
    };
    let payload = req.body;
    // Generate a signed JWT token
    const token = jwt.sign(payload, process.env.SECRET_KEY, options);
    res.send(token);
};

module.exports = {
    getAllUsers,
    login
};