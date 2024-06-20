const mongoose = require('mongoose');

// יצירת סכימת המודל של שירותים
const servicesSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
});
// ייצוא המודל שנקרא 'Service' שמבוסס על הסכימה שיצרנו
module.exports = mongoose.model('service',servicesSchema);