const express = require('express');
const axios = require('axios');
const natural = require('natural');
const GitHubModels = require('github-models');

const app = express();
const port = 3000;

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

app.get('/analyze', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const response = await axios.get(`https://api.socialmedia.com/search?q=${query}`);
    const data = response.data;
    const sentimentScores = data.map(item => ({
      text: item.text,
      score: analyzer.getSentiment([item.text])
    }));
    res.json(sentimentScores);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});