// ייבוא המודל של Business
const businessSvc = require('../services/businessService');

// יצירת עסק חדש
const  createBusiness = async(req, res) => {
    try {
        const newBusiness = await businessSvc.createBusiness(req.body);
        // console.log("create business " + newBusiness);
        res.status(201).json(newBusiness);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// עדכון פרטי עסק קיים
const updateBusiness = async (req, res) => {
    try {
        // חיפוש ועדכון העסק לפי ID, עם הנתונים שהתקבלו בבקשה
        const business = await businessSvc.updateBusiness(req.params.id, req.body);
        if (!business) {
            return res.status(404).json({ error: 'Business not found' });
        }
        // החזרת העסק המעודכן בתגובה
        res.json(business);
    } catch (error) {
        // במקרה של שגיאה, החזר שגיאה 400 עם הודעת השגיאה
        res.status(400).json({ error: error.message });
    }
};
//קבלת העסק
 const getBusiness = async(req,res) =>{
    try {
        const business = await businessSvc.getBusiness();
        res.status(200).json(business);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = {
    createBusiness,
    updateBusiness,
    getBusiness
}