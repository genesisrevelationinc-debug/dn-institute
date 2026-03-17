const axios = require('axios');
const natural = require('natural');
const { TwitterApi } = require('twitter-api-v2');

const tokenizer = new natural.WordTokenizer();
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

const twitterClient = new TwitterApi({
  appKey: 'YOUR_TWITTER_API_KEY',
  appSecret: 'YOUR_TWITTER_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

async function fetchTweets(query) {
  const tweets = await twitterClient.v2.search(query, { max_results: 10 });
  return tweets.data.map(tweet => tweet.text);
}

function analyzeSentiment(texts) {
  return texts.map(text => ({
    text,
    score: analyzer.getSentiment(tokenizer.tokenize(text))
  }));
}

async function main() {
  const tweets = await fetchTweets('stock market');
  const sentimentAnalysis = analyzeSentiment(tweets);
  console.log(sentimentAnalysis);
}

main();