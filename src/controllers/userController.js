// controllers/userController.js

const userService = require('../services/userServices');

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
}

async function createUser(req, res) {
  const newUser = req.body || req.query || req.params;
  try {
    const user = await userService.createUser(newUser);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}

async function updateUser(req, res) {
  const userId = req.body._id || req.query._id || req.params._id   // Assuming the user ID is provided as a route parameter
  const updatedUser = req.body || res.query || res.params; // Assuming the updated user data is provided in the request body
  try {
    const user = await userService.updateUser(userId, updatedUser);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

async function deleteUser(req, res) {
  const userId = req.body._id || req.query._id || req.params._id  // Assuming the user ID is provided as a route parameter
  const deleteUser = req.body || res.query || res.params; // Assuming the updated user data is provided in the request body
  try {
    const user = await userService.deleteUser(userId, deleteUser);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
