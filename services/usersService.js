const user = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// פונקציה ליצירת משתמש חדש
const createUser = async (data) => {
    const newUser = new user(data);
    await newUser.save();
    return newUser;
};

// פונקציה לקבלת כל המשתמשים
const getUsers = async () => {
    return await user.find();
};

//פונקציה לאימות הסיסמאות
const authenticateUser = async (username, password) => {
    const _user = await user.findOne({ username });
    if (!_user) {

        throw new Error('Invalid username or password');
    }
    console.log(_user);
    const isMatch = await bcrypt.compare(password, _user.password);
    if (!isMatch) {

        throw new Error('Invalid username or password');
    }

    return _user;
};

// פונקציה ליצירת טוקן JWT
const generateToken = (_user) => {
    return jwt.sign({ id: _user._id, username: _user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
    createUser,
    getUsers,
    authenticateUser,
    generateToken
}