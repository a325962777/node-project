// ייבוא ספריית express ליצירת ראוטרים
const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
const authenticateToken = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/adminMiddleware');



/**
 * @swagger
 * /api/business:
 *   post:
 *     summary: Create a new business
 *     description: Create a new business with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request, check your input
 */
/**
 * @swagger
 * /api/business:
 *   get:
 *     summary: Get all businesses
 *     description: Retrieve a list of all businesses
 *     responses:
 *       200:
 *         description: A list of businesses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   businessId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   email:
 *                     type: string
 */
/**
 * @swagger
 * /api/business/{id}:
 *   put:
 *     summary: Update a business
 *     description: Update a business with the provided details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The business ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad request, check your input
 *       404:
 *         description: Business not found
 */

// הגדרת נתיב ליצירת עסק חדש
router.post('/business', authenticateToken, checkAdmin, businessController.createBusiness);

// הגדרת נתיב לעדכון פרטי עסק קיים
router.put('/business/:id', authenticateToken, checkAdmin, businessController.updateBusiness);

// הגדרת נתיב לקבלת כל העסקים
router.get('/business', authenticateToken, checkAdmin, businessController.getBusiness);

module.exports = router;
