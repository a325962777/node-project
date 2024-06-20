const Business = require('../models/businessModel');

// פונקציה ליצירת עסק חדש
const createBusiness = async (data) => {
    const newBusiness = new Business(data);
    await newBusiness.save();
    return newBusiness;
};

// פונקציה לעדכון עסק קיים
const updateBusiness = async (id, data) => {
    const business = await Business.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return business;
};

//פונקציה לקבלת עסק קיים
const getBusiness = async () => {
    const business = await Business.find().exec();
    return business;
};


module.exports = 
{
    createBusiness,
    updateBusiness,
    getBusiness
};