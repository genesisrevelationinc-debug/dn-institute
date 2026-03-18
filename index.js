const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const natural = require('natural');
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
const analyzer = new Analyzer('English', stemmer, 'afinn');

// Route to get sentiment analysis
app.get('/sentiment', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('Query parameter "q" is required');

  try {
    const tweets = await twitterClient.v2.search(query, { max_results: 10 });
    const sentiments = tweets.data.map(tweet => ({
      text: tweet.text,
      sentiment: analyzer.getSentiment(tweet.text.split(' '))
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});

// Example route to fetch news sentiment
app.get('/news-sentiment', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('Query parameter "q" is required');

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_NEWS_API_KEY`);
    const articles = response.data.articles;
    const sentiments = articles.map(article => ({
      title: article.title,
      sentiment: analyzer.getSentiment(article.title.split(' '))
    }));
    res.json(sentiments);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});