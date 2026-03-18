const express = require('express');
const axios = require('axios');
const { analyzeSentiment } = require('github-models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const sentiment = await analyzeSentiment(text);
    res.json(sentiment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze sentiment' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example of fetching data from a social media API
async function fetchSocialMediaData() {
  try {
    const response = await axios.get('https://api.socialmedia.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching social media data:', error);
  }
}