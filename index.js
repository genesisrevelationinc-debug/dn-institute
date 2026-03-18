const express = require('express');
const axios = require('axios');
const natural = require('natural');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

app.get('/sentiment', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter "q" is required.');
  }

  try {
    const response = await axios.get(`https://api.socialmedia.com/search?q=${query}&token=${process.env.SOCIAL_MEDIA_API_KEY}`);
    const articles = response.data.articles;
    const sentiments = articles.map(article => ({
      title: article.title,
      sentiment: analyzer.getSentiment(article.content.split(" "))
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send('Error fetching data from social media API.');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});