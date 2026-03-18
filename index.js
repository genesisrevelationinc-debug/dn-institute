const express = require('express');
const TwitterApi = require('twitter-api-v2').TwitterApi;
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

const twitterClient = new TwitterApi({
  appKey: 'YOUR_TWITTER_API_KEY',
  appSecret: 'YOUR_TWITTER_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

app.get('/sentiment', async (req, res) => {
  try {
    const tweets = await twitterClient.v2.search('market sentiment', { max_results: 10 });
    const news = await axios.get('https://newsapi.org/v2/everything?q=market%20sentiment&apiKey=YOUR_NEWS_API_KEY');
    const $ = cheerio.load(news.data.articles[0].content);
    const text = $('p').text();
    res.json({ tweets: tweets.data.data, news: text });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});