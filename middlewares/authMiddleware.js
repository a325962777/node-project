const jwt = require('jsonwebtoken');
// const user = require('../models/usersModel');

// Middleware לבדיקת אימות
const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    // בדיקה האם יש ערך בכותרת "Authorization"
    if (!authHeader) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.replace('Bearer ', '');

    //ביצוע אימות לאחר בדיקה שקיים תוקן
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authenticateToken;