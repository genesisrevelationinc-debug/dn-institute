const express = require('express');
const axios = require('axios');
const natural = require('natural');
const TwitterApi = require('twitter-api-v2').TwitterApi;

const app = express();
const port = 3000;

const twitterClient = new TwitterApi('YOUR_TWITTER_BEARER_TOKEN');

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

app.get('/sentiment', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const tweets = await twitterClient.v2.search(query, { max_results: 10 });
    const sentiments = tweets.data.map(tweet => ({
      text: tweet.text,
      sentiment: analyzer.getSentiment(tweet.text.split(' '))
    }));

    res.json(sentiments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching tweets');
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});