const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/sentiment', async (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(400).send('Text query parameter is required');
  }

  try {
    // Example API call to a sentiment analysis service
    const response = await axios.post('https://api.github.com/models/sentiment', { text });
    res.json(response.data);
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    res.status(500).send('Error analyzing sentiment');
  }
});

app.listen(PORT, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${PORT}`);
});

// Example route for social media integration
app.get('/social-media', async (req, res) => {
  // Logic to fetch and analyze social media posts
  res.send('Fetching and analyzing social media posts...');
});