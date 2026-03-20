const express = require('express');
const axios = require('axios');
const natural = require('natural');
const GitHubModels = require('github-models');

const app = express();
const port = 3000;

const tokenizer = new natural.WordTokenizer();
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const sentiment = new Analyzer("English", stemmer, "afinn");

app.get('/analyze', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const response = await axios.get(`https://api.socialmedia.com/search?q=${query}`);
    const articles = response.data.articles;

    const sentiments = articles.map(article => {
      const tokens = tokenizer.tokenize(article.content);
      return sentiment.getSentiment(tokens);
    });

    const averageSentiment = sentiments.reduce((sum, sentiment) => sum + sentiment, 0) / sentiments.length;

    res.json({ query, averageSentiment });
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});