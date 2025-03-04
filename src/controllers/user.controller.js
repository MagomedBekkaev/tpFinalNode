const userService = require('../services/user.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function listAllUsers(req, res, next) {
    try {
        const users = await userService.listAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const signUp = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = await userService.signUp({ ...req.body, password: hash });
        
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    listAllUsers,
    signUp,
};