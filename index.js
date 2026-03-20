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
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`);
    const articles = response.data.articles;
    const sentiments = articles.map(article => ({
      title: article.title,
      sentiment: analyzer.getSentiment(article.description.split(' '))
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send('Error fetching news articles');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});