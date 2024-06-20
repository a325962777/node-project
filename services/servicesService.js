const service = require('../models/servicesModel');

// פונקציה ליצירת שירות חדש
const createService = async (data) => {
    const newService = new service(data);
    await newService.save();
    return newService;
};

// פונקציה לקבלת כל השירותים
const getServices = async () => {
    return await service.find();
};

// פונקציה לעדכון שירות קיים לפי מזהה (ID)
const updateService = async (id, data) => {
    const updatedService = await service.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return updatedService;
};

// פונקציה למחיקת שירות לפי מזהה (ID)
const deleteService = async (id) => {
    await service.findByIdAndDelete(id);
};
module.exports = {
    createService,
    getServices,
    updateService,
    deleteService
}