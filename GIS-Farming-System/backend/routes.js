const express = require('express');
const router = express.Router();
const LandData = require('models/LandData'); // Land Data Model

// Store land data
router.post('/add-land-data', async (req, res) => {
    try {
        const newData = new LandData(req.body);
        await newData.save();
        res.json({ message: 'Land data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save land data' });
    }
});

// Fetch GIS land data
router.get('/land-data', async (req, res) => {
    try {
        const data = await LandData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch land data' });
    }
});

module.exports = router;