require('dotenv').config();
const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

app.get('/sentiment', async (req, res) => {
  try {
    const { data: tweets } = await twitterClient.v2.search('market sentiment', { max_results: 10 });
    const newsResponse = await axios.get('https://newsapi.org/v2/everything?q=market%20sentiment&apiKey=' + process.env.NEWS_API_KEY);
    const newsArticles = newsResponse.data.articles;

    const sentimentData = {
      tweets: tweets.map(tweet => ({
        text: tweet.text,
        sentiment: analyzeSentiment(tweet.text)
      })),
      news: newsArticles.map(article => ({
        title: article.title,
        description: article.description,
        sentiment: analyzeSentiment(article.description)
      }))
    };

    res.json(sentimentData);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

function analyzeSentiment(text) {
  // Placeholder for sentiment analysis logic
  return 'neutral';
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});