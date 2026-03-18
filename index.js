const express = require('express');
const axios = require('axios');
const { TwitterApi } = require('twitter-api-v2');
const natural = require('natural');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Twitter API setup
const twitterClient = new TwitterApi({
  appKey: 'YOUR_TWITTER_API_KEY',
  appSecret: 'YOUR_TWITTER_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

// Sentiment analysis setup
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const sentiment = new Analyzer('English', stemmer, 'afinn');

app.get('/sentiment', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('Query parameter "q" is required');

  try {
    const tweets = await twitterClient.v2.search(query, { max_results: 10 });
    const sentiments = tweets.data.map(tweet => ({
      text: tweet.text,
      sentiment: sentiment.getSentiment(tweet.text)
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get('/news', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('Query parameter "q" is required');

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_NEWS_API_KEY`);
    const data = await response.json();
    const sentiments = data.articles.map(article => ({
      title: article.title,
      description: article.description,
      sentiment: sentiment.getSentiment(article.description)
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});