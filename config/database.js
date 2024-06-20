// ייבוא ספריית mongoose לצורך התחברות למסד הנתונים
const mongoose = require('mongoose');
require('dotenv').config();

// פונקציה להתחברות למסד הנתונים
const connectDB = async () => {
  try {
    // התחברות למסד הנתונים בעזרת כתובת מהסביבה
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    // console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
