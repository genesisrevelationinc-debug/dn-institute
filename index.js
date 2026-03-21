const express = require('express');
const axios = require('axios');
const { TwitterApi } = require('twitter-api-v2');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const SentimentAnalyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const sentiment = new SentimentAnalyzer('English', stemmer, 'afinn');

const app = express();
const PORT = process.env.PORT || 3000;

const twitterClient = new TwitterApi({
  appKey: 'YOUR_TWITTER_APP_KEY',
  appSecret: 'YOUR_TWITTER_APP_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

app.get('/sentiment', async (req, res) => {
  try {
    const { query } = req.query;
    const tweets = await twitterClient.v2.search(query, { max_results: 10 });
    const tweetTexts = tweets.data.map(tweet => tweet.text);
    const sentimentScores = tweetTexts.map(text => sentiment.getSentiment(tokenizer.tokenize(text.toLowerCase())));
    const averageSentiment = sentimentScores.reduce((sum, score) => sum + score, 0) / sentimentScores.length;
    res.json({ query, averageSentiment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example usage: