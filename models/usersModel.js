const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// יצירת סכימת המודל של משתמשים
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' }, // תפקיד המשתמש: מנהל או משתמש רגיל
});

// פונקציה שנקראת לפני שמירת משתמש חדש שמקודדת את הסיסמה
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// ייצוא המודל שנקרא 'User' שמבוסס על הסכימה שיצרנו
module.exports = mongoose.model('user', userSchema);




