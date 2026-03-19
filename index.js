const express = require('express');
const axios = require('axios');
const natural = require('natural');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

app.get('/analyze', async (req, res) => {
  try {
    const response = await axios.get('https://api.socialmedia.com/posts', {
      headers: {
        'Authorization': `Bearer ${process.env.SOCIAL_MEDIA_API_KEY}`
      }
    });
    const posts = response.data;
    const sentimentScores = posts.map(post => ({
      text: post.text,
      score: analyzer.getSentiment([post.text])
    }));
    res.json(sentimentScores);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Market Sentiment Analysis app listening at http://localhost:${port}`);
});