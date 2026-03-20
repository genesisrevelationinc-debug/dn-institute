const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/sentiment', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).send({ error: 'Query parameter "q" is required' });
    }

    const response = await axios.get(`https://api.github.com/models/sentiment`, {
      params: { text: query },
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      }
    });

    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});