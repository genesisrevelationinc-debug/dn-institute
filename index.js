const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

// Twitter API client
const twitterClient = new TwitterApi({
  appKey: 'YOUR_TWITTER_API_KEY',
  appSecret: 'YOUR_TWITTER_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

// Route to get sentiment from Twitter
app.get('/sentiment/twitter', async (req, res) => {
  try {
    const tweets = await twitterClient.v2.search('market sentiment', { max_results: 10 });
    res.json(tweets);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Route to get sentiment from news articles
app.get('/sentiment/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=market%20sentiment&apiKey=YOUR_NEWS_API_KEY');
    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});