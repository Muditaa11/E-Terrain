const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const plantDiseaseData = require('./plant_diseases.js'); // Importing disease data

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to fetch disease data
app.get('/get_diseases', (req, res) => {
    res.json(plantDiseaseData);
});

// API to handle chatbot requests
app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let response = "I couldn't find any disease related to your query.";

    for (const entry of plantDiseaseData) {
        if (userMessage.includes(entry.plant.toLowerCase()) || userMessage.includes(entry.disease.toLowerCase())) {
            response = `${entry.plant} - ${entry.disease}: ${entry.symptoms.join(', ')}. Treatment: ${entry.treatment}`;
            break;
        }
    }
    res.json({ response });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
