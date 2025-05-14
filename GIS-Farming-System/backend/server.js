const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Land = require('./models/LandModel');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Failed", err));


app.post('/api/land', async (req, res) => {
    try {
        const { owner, coordinates, cropType } = req.body;

        // Ensure coordinates are in proper format
        if (!Array.isArray(coordinates) || coordinates.length < 3) {
            return res.status(400).json({ error: "Invalid polygon coordinates" });
        }

        const newLand = new Land({ owner, coordinates, cropType });
        await newLand.save();
        res.status(201).json(newLand);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

app.get('/api/land', async (req, res) => {
    try {
        const lands = await Land.find();
        res.json(lands);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

app.listen(5000, () => console.log("🌍 Server running on port 5000"));