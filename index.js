require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/sentiment', async (req, res) => {
  try {
    const response = await axios.get(`https://api.socialmedia.com/sentiment?api_key=${process.env.SOCIAL_MEDIA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
🌰🌰🌰