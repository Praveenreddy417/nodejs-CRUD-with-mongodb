// services/userService.js
const User = require('../models/user');

async function getUsers() {
    return User.find();
}

async function createUser(user) {
    return User.create(user);
}

async function updateUser(userId, updatedUser) {
    return User.findByIdAndUpdate(userId, updatedUser, { new: true });
}

async function deleteUser(userId, deleteUser) {
    return User.findByIdAndDelete(userId, deleteUser, { new: true });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};