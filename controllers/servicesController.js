const servicesSvc = require('../services/servicesService');

// פונקציה לטיפול בבקשת POST ליצירת שירות חדש
const createService = async (req, res) => {
    try {
        const newService = await servicesSvc.createService(req.body);
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת GET לקבלת כל השירותים
const getServices = async (req, res) => {
    try {
        const services = await servicesSvc.getServices();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת PUT לעדכון שירות קיים לפי מזהה (ID)
const updateService = async (req, res) => {
    try {
        const updatedService = await servicesSvc.updateService(req.params.id, req.body);
        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(updatedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת DELETE למחיקת שירות לפי מזהה (ID)
const deleteService = async (req, res) => {
    try {
        await servicesSvc.deleteService(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createService,
    getServices,
    updateService,
    deleteService
}
