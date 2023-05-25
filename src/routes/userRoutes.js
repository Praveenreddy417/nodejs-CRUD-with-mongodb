// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/get', userController.getUsers);
/**
 * @swagger
 * /users/get:
 *   get:
 *     parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: string
 *              required:
 *                 - id
 *                 - Records_Filter
 *              properties:
 *                  id:
 *                      type: string
 *                      minLength: 0
 *                      maxLength: 1000
 *                      example: string
 *                  Records_Filter:
 *                      type: string
 *                      minLength: 0
 *                      maxLength: 1000
 *                      example: string        
 *     responses:
 *          '200':
 *              description: User data fetched successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: User not found request
 */
router.post('/users/create', userController.createUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: User's id
 *         name:
 *           type: string
 *           description: User's name
 *         gender:
 *           type: string
 *           description: User's gender
 *         salary:
 *           type: string
 *           description: User's salary
 *       required:
 *         - id
 *         - name
 *         - gender
 *         - salary
 */

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *          '200':
 *              description: User added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: User not found
 */
router.put('/users/update', userController.updateUser);
/**
 * @swagger
 * /users/update:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: query
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *          '200':
 *              description: User updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: User not found
 */
router.delete('/users/delete', userController.deleteUser);
/**
 * @swagger
 * /users/delete:
 *   delete:
 *     summary: Delete a record by ID
 *     parameters:
 *       - in: query
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the record to delete
 *     responses:
 *          '200':
 *              description: User added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: User not found
 */

module.exports = router;