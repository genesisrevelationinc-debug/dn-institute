import tweepy
import pandas as pd
import os
from textblob import TextBlob
import re
from datetime import datetime
import json

class CryptoCustodianTweetCollector:
    def __init__(self, api_key, api_secret, access_token, access_token_secret):
        self.api_key = api_key
        self.api_secret = api_secret
        self.access_token = access_token
        self.access_token_secret = access_token_secret
        self.auth = tweepy.OAuthHandler(api_key, api_secret)
        self.auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.API(self.auth, wait_on_rate_limit=True)
        
    def collect_topic_tweets(self, topic, topic_keywords, count=100):
        """Collect tweets for a specific topic related to crypto custodians"""
        tweets_data = []
        
        # Search queries for crypto custodians
        search_queries = [
            "crypto custodian",
            "bitcoin exchange",
            "cryptocurrency exchange",
            "digital asset custody",
            "crypto wallet service"
        ]
        
        for query in search_queries:
            search_term = f"{query} {topic}"
            try:
                tweets = tweepy.Cursor(self.api.search_tweets,
                                     q=search_term,
                                     lang="en",
                                     result_type="recent").items(count)
                
                for tweet in tweets:
                    # Get sentiment using TextBlob
                    analysis = TextBlob(tweet.text)
                    sentiment = 'neutral'
                    if analysis.sentiment.polarity > 0.1:
                        sentiment = 'positive'
                    elif analysis.sentiment.polarity < -0.1:
                        sentiment = 'negative'
                    
                    tweet_data = {
                        'id': tweet.id,
                        'text': tweet.text,
                        'created_at': tweet.created_at,
                        'sentiment': sentiment,
                        'topic': topic
                    }
                    tweets_data.append(tweet_data)
                    
            except Exception as e:
                print(f"Error collecting tweets: {e}")
                continue
                
        return tweets_data
        
    def save_tweets(self, topic, tweets_data, filename=None):
        """Save collected tweets to file"""
        if not filename:
            filename = f"{topic}_tweets.json"
            
        # Save to JSON file
        with open(filename, 'w') as f:
            json.dump(tweets_data, f, indent=2, default=str)
            
        return filename
        
    def analyze_and_filter_tweets(self, raw_tweets, topic_keywords):
        """Filter tweets based on topic relevance"""
        relevant_tweets = []
        
        for tweet in raw_tweets:
            # Check if tweet contains topic keywords
            if any(keyword in tweet.text.lower() for keyword in topic_keywords):
                relevant_tweets.append(tweet)
                
        return relevant_tweets
        
    def collect_and_save_topic_dataset(self, topic, topic_keywords):
        """Main function to collect and save topic dataset"""
        print(f"Collecting {topic} tweets...")
        
        # Collect tweets
        tweets_data = self.collect_topic_tweets(topic, topic_keywords, 200)
        
        # Filter for relevance
        relevant_tweets = self.analyze_and_filter_tweets(tweets_data, topic_keywords)
        
        # Save dataset
        filename = self.save_tweets(topic, relevant_tweets)
        print(f"Saved {len(relevant_tweets)} relevant tweets to {filename}")
        
        return relevant_tweets

def main():
    # Twitter API credentials (these would come from environment variables in practice)
    API_KEY = "your_api_key"  
    API_SECRET = "your_api_secret"
    ACCESS_TOKEN = "your_access_token"
    ACCESS_TOKEN_SECRET = "your_access_token_secret"
    
    # Topic keywords for each category
    topics = {
        "hacker-attacks": ["hack", "hacked", "cyber attack", "security breach", "stolen funds"],
        "law-enforcement": ["law enforcement", "fbi", "criminal investigation", "sec investigation", "regulatory action"],
        "uptime": ["downtime", "outage", "maintenance", "system down", "unavailable"],
        "withdrawal": ["withdrawal", "deposit", "frozen account", "balance", "verification"],
        "fraud": ["scam", "fraud", "pump and dump", "exit scam", "illegal activity"]
    }
    
    # Initialize collector
    collector = CryptoCustodianTweetCollector(API_KEY, API_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    
    # Collect for each topic
    for topic_name, keywords in topics.items():
        print(f"Collecting data for {topic_name}...")
        collector.collect_and_save_topic_dataset(topic_name, keywords)

if __name__ == "__main__":
    main()