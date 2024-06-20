const userSvc = require('../services/usersService');


// פונקציה לטיפול בבקשת POST ליצירת משתמש חדש
const createUser = async (req, res) => {
    try {
        const newUser = await userSvc.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת GET לקבלת כל המשתמשים
const getUsers = async (req, res) => {
    try {
        const users = await userSvc.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת POST להרשמת משתמש חדש
const signUp = async (req, res) => {
    try {
        const newUser = await userSvc.createUser(req.body);
        const token = userSvc.generateToken(newUser);
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// פונקציה לטיפול בבקשת POST להתחברות משתמש
const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`username,password : ${username},${password}`);
        const user = await userSvc.authenticateUser(username, password);
        const token = userSvc.generateToken(user);
        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    signUp,
    signIn
}