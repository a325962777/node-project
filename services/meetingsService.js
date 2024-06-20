const meeting = require('../models/meetingModel');

// פונקציה ליצירת פגישה חדשה
const createMeeting = async (data) => {
    const newMeeting = new meeting(data);
    await newMeeting.save();
    return newMeeting;
};

// פונקציה לקבלת כל הפגישות
const getMeetings = async () => {
    return await meeting.find();
};

// פונקציה לעדכון פגישה קיימת לפי מזהה (ID)
const updateMeeting = async (id, data) => {
    const updatedMeeting = await meeting.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return updatedMeeting;
};

// פונקציה למחיקת פגישה לפי מזהה (ID)
const deleteMeeting = async (id) => {
    await meeting.findByIdAndDelete(id);
};

// פונקציה שבודקת אם יש פגישה מקבילה בזמן הנבחר
const checkDuplicateMeeting = async (meetingTime) => {
    const existingMeeting = await meeting.findOne({ date: meetingTime });
    return existingMeeting ? true : false;
};

module.exports = {
    createMeeting,
    getMeetings,
    updateMeeting,
    deleteMeeting,
    checkDuplicateMeeting
}