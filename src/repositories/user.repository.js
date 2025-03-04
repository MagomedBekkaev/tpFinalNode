const { models } = require('../../config/db');
const User = models.User;

async function listAllUsers() {
    const users = await User.findAll();
    return users;
}

async function getUserByEmail(email) {
    return await User.findOne({ where: { email } });
}

async function createUser(userData) {
    return await User.create(userData);
}

async function signIn(email) {
    return await User.findOne({ where: { email } });
}

module.exports = {
    listAllUsers,
    createUser,
    getUserByEmail,
    signIn
};