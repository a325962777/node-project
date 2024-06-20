// Middleware לטיפול גלובלי בשגיאות
const errorHandler = (err,req,res,next) => {
    console.log(err.message);
    res.status(500).json({ error: 'Something went wrong.' });
};

module.exports = errorHandler;