// app.js
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/stock", async (req, res) => {
  const { ticker } = req.body;
  const response = await axios.get(
    `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=ItZ1cAVTSxaLTt0KvS1pRURzputX0icK`
  );
  const stockPrice = response.data.results[0].c;
  res.json({ [ticker]: stockPrice });
});

app.listen(3000, () => console.log("Server started"));

module.exports = app; // export the app for testing
