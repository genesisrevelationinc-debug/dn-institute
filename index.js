const express = require('express');
const axios = require('axios');
const natural = require('natural');
const { TwitterApi } = require('twitter-api-v2');

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

// Endpoint to get sentiment analysis of a tweet
app.get('/analyze-tweet/:id', async (req, res) => {
  try {
    const tweet = await twitterClient.v2.singleTweet(req.params.id);
    const sentiment = analyzer.getSentiment(tweet.data.text.split(' '));
    res.json({ sentiment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get sentiment analysis of a news article
app.get('/analyze-news/:url', async (req, res) => {
  try {
    const response = await axios.get(req.params.url);
    const text = response.data; // Assuming the response contains the text directly
    const sentiment = analyzer.getSentiment(text.split(' '));
    res.json({ sentiment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});