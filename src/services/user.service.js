const userRepository = require('../repositories/user.repository');

async function listAllUsers() {
    return await userRepository.listAllUsers();
}

async function signUp(userData) {
    return await userRepository.createUser(userData);
}

module.exports = {
    listAllUsers,
    signUp,
};