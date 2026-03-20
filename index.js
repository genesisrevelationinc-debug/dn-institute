const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/sentiment', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://api.socialmedia.com/search?q=${query}`);
    const sentiment = analyzeSentiment(response.data);
    res.json({ sentiment });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching sentiment data' });
  }
});

function analyzeSentiment(data) {
  // Placeholder for sentiment analysis logic
  return 'Positive'; // Example sentiment
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});