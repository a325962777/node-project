const user = require('../models/usersModel');

// Middleware לבדיקה אם המשתמש הוא מנהל
const checkAdmin = async (req, res, next) => {
    const _user = await user.findById(req.user.id);

    if (!_user || _user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next();
};
module.exports = checkAdmin;