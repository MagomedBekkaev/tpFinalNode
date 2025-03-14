const userService = require('../services/user.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function listAllUsers(req, res) {
    try {
        const users = await userService.listAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json(users);
    }
}

const signUp = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = await userService.signUp({ ...req.body, password: hash });
        
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const signIn = async (req, res) => {
    try {
        const user = await userService.signIn(req.body.email);
        
        if (!user) {
            throw new Error('User not found');
        }
        
        const isValid = await bcrypt.compare(req.body.password, user.password);
        
        if (!isValid) {
            throw new Error('Invalid password');
        }
        
        const token = jwt.sign({ sub: user.email, id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(401).json({ message: error.message || "Authentification échouée" });
    }
}

const getProfile = async (req, res) => {
    const email = req.auth.email;

    const user = await userService.findUerByEmail(email);
    res.status(200).json(user)
    };

module.exports = {
    listAllUsers,
    signUp,
    signIn,
    getProfile
};