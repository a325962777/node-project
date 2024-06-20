const mongoose = require('mongoose');
const service = require('../models/servicesModel');

// יצירת סכימת המודל של פגישות
const meetingSchema = new mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    // serviceId:{ type: service, required: true }
});

// ייצוא המודל שנקרא 'Meeting' שמבוסס על הסכימה שיצרנו
module.exports = mongoose.model('meeting', meetingSchema);