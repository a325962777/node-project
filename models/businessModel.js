const mongoose = require('mongoose');

// הגדרת סכימת ה-Business
const businessSchema = new mongoose.Schema({
    businessId: { type: Number, require: true, unique:true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }
    
});

// יצירת המודל על בסיס הסכמה שהגדרנו
module.exports = mongoose.model('business', businessSchema);
