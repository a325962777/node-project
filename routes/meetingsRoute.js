// const express = require('express');
// const router = express.Router();
// const meetingController = require('../controllers/meetingsController');
// const authenticateToken = require('../middlewares/authMiddleware');
// const checkAdmin = require('../middlewares/adminMiddleware');

// // ראוטר ליצירת פגישה חדשה
// router.post('/meetings', meetingController.createMeeting);

// // ראוטר לקבלת כל הפגישות
// router.get('/meetings', meetingController.getMeetings);

// // ראוטר לעדכון פגישה קיימת לפי מזהה (ID)
// router.put('/meetings/:id',authenticateToken,checkAdmin, meetingController.updateMeeting);

// // ראוטר למחיקת פגישה לפי מזהה (ID)
// router.delete('/meetings/:id', meetingController.deleteMeeting);

// module.exports = router;




const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/meetingsController');
const authenticateToken = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/adminMiddleware');


/**
 * @swagger
 * components:
 *   schemas:
 *     Meeting:
 *       type: object
 *       required:
 *         - message
 *         - date
 *         - email
 *       properties:
 *         message:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *         email:
 *           type: string
 *       example:
 *         message: Discussion
 *         date: "2024-06-20T10:00:00Z"
 *         email: example@example.com
 */

/**
 * @swagger
 * /api/meetings:
 *   post:
 *     summary: Create a new meeting
 *     description: Create a new meeting with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request, check your input
 */
router.post('/meetings', meetingController.createMeeting);

/**
 * @swagger
 * /api/meetings:
 *   get:
 *     summary: Get all meetings
 *     description: Retrieve a list of all meetings
 *     responses:
 *       200:
 *         description: A list of meetings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meeting'
 */

router.get('/meetings', meetingController.getMeetings);

/**
 * @swagger
 * /api/meetings/{id}:
 *   put:
 *     summary: Update a meeting
 *     description: Update a meeting with the provided details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad request, check your input
 *       404:
 *         description: Meeting not found
 */

router.put('/meetings/:id', authenticateToken, checkAdmin, meetingController.updateMeeting);

/**
 * @swagger
 * /api/meetings/{id}:
 *   delete:
 *     summary: Delete a meeting
 *     description: Delete a meeting by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       404:
 *         description: Meeting not found
 */

router.delete('/meetings/:id', meetingController.deleteMeeting);

module.exports = router;
