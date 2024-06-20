const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         role:
 *           type: string
 *           enum:
 *             - admin
 *             - user
 *           default: user
 *       example:
 *         username: johndoe
 *         password: password123
 *         email: johndoe@example.com
 *         role: user
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request, check your input
 */
router.post('/users', userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/users', userController.getUsers);

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Sign up a new user with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Successfully signed up
 *       400:
 *         description: Bad request, check your input
 */
router.post('/users/signup', userController.signUp);

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     summary: Sign in user
 *     description: Sign in user with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully signed in
 *       401:
 *         description: Unauthorized, invalid credentials
 */
router.post('/users/signin', userController.signIn);

module.exports = router;


