// const express = require('express');
// const router = express.Router();
// const serviceController = require('../controllers/servicesController');
// const authenticateToken = require('../middlewares/authMiddleware');
// const checkAdmin = require('../middlewares/adminMiddleware');

// // ראוטר ליצירת שירות חדש
// router.post('/services', authenticateToken, checkAdmin, serviceController.createService);

// // ראוטר לקבלת כל השירותים
// router.get('/services', serviceController.getServices);

// // ראוטר לעדכון שירות קיים לפי מזהה (ID)
// router.put('/services/:id', authenticateToken, checkAdmin, serviceController.updateService);

// // ראוטר למחיקת שירות לפי מזהה (ID)
// router.delete('/services/:id', authenticateToken, checkAdmin, serviceController.deleteService);

// module.exports = router;



const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicesController');
const authenticateToken = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/adminMiddleware');

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - serviceName
 *       properties:
 *         serviceName:
 *           type: string
 *       example:
 *         serviceName: Cleaning
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a new service
 *     description: Create a new service with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request, check your input
 */
router.post('/services', authenticateToken, checkAdmin, serviceController.createService);

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     description: Retrieve a list of all services
 *     responses:
 *       200:
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

router.get('/services', serviceController.getServices);

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service
 *     description: Update a service with the provided details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad request, check your input
 *       404:
 *         description: Service not found
 */

router.put('/services/:id', authenticateToken, checkAdmin, serviceController.updateService);

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a service
 *     description: Delete a service by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       404:
 *         description: Service not found
 */

router.delete('/services/:id', authenticateToken, checkAdmin, serviceController.deleteService);

module.exports = router;
