// app.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/stock', async (req, res) => {
    const { ticker } = req.body;
    try {
        const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?unadjusted=true&apiKey=YOUR_API_KEY`);
        const stockPrice = response.data.results[0].c;
        res.json({ [ticker]: stockPrice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(3000, () => console.log('Server started'));

module.exports = app; // export the app for testing