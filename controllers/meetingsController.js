const meetingsSvc = require('../services/meetingsService');

// פונקציה לטיפול בבקשת POST ליצירת פגישה חדשה
const createMeeting = async (req, res) => {
    try {
        const newMeeting = await meetingsSvc.createMeeting(req.body);

        // בדיקה שאין פגישה מקבילה בזמן הנבחר
        const date = newMeeting.date;
        const isDuplicate = await meetingsSvc.checkDuplicateMeeting(date);

        if (isDuplicate) {
            return res.status(400).json({ error: 'Duplicate meeting time. Please choose a different time.' });
        }
        res.status(201).json(newMeeting);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת GET לקבלת כל הפגישות
const getMeetings = async (req, res) => {
    try {
        const meetings = await meetingsSvc.getMeetings();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת PUT לעדכון פגישה קיימת לפי מזהה (ID)
const updateMeeting = async (req, res) => {
    try {
        const updatedMeeting = await meetingsSvc.updateMeeting(req.params.id, req.body);
        if (!updatedMeeting) {
            return res.status(404).json({ error: 'Meeting not found' });
        }
        res.json(updatedMeeting);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת DELETE למחיקת פגישה לפי מזהה (ID)
const deleteMeeting = async (req, res) => {
    try {
        await meetingsSvc.deleteMeeting(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createMeeting,
    getMeetings,
    updateMeeting,
    deleteMeeting,
};