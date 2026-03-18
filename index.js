const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/sentiment', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).send({ error: 'Query parameter "q" is required' });
    }

    // Example API call to a sentiment analysis service
    const response = await axios.get(`https://api.example.com/sentiment?q=${encodeURIComponent(query)}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching sentiment data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});