const express = require('express');
const connectDB = require('./config/database');
const businessRoutes = require('./routes/businessRoute');
const servicesRoutes = require('./routes/servicesRoute');
const meetingsRoutes = require('./routes/meetingsRoute');
const usersRoutes = require('./routes/usersRoute');
const errorHandler = require('./middlewares/errorHandler');
const swagger = require('./config/swagger');


require('dotenv').config();

const app = express();

// התחברות למסד הנתונים
connectDB();

app.use(express.json());

// שימוש ב-Routes
app.use('/api', businessRoutes);
app.use('/api', servicesRoutes);
app.use('/api', meetingsRoutes);
app.use('/api', usersRoutes);

//שימוש ב-swagger
app.use('/swagger',swagger.serve,swagger.setup);

// Middleware לטיפול גלובלי בשגיאות
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV) {
    
}

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});