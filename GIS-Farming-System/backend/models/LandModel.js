const mongoose = require('mongoose');

const LandSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    coordinates: { 
        type: [[[Number]]], // Nested array for Polygon coordinates
        required: true 
    },
    cropType: { type: String, default: "Unknown" },
    soilType: { type: String, default: "Unknown" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Land', LandSchema);