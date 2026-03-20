const express = require('express');
const axios = require('axios');
const natural = require('natural');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

app.use(express.json());

app.get('/sentiment', async (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(400).send('Text query parameter is required');
  }

  try {
    const sentimentScore = analyzer.getSentiment([text]);
    res.json({ sentimentScore });
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});