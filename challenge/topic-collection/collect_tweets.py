#!/usr/bin/env python3
"""
Chestnut 🌰 Dataset Collection Script for Crypto Custodian Tweets

This script helps collect and organize tweets related to crypto custodians
for various negative sentiment topics.
"""

import os
import tweepy
import pandas as pd
from datetime import datetime, timedelta
import time
from typing import List, Dict
import argparse

class CryptoCustodianTweetCollector:
    """Collect tweets about crypto custodians for specific topics"""
    
    def __init__(self, api_key: str, api_secret: str, access_token: str, access_token_secret: str):
        """Initialize the Twitter API client"""
        auth = tweepy.OAuthHandler(api_key, api_secret)
        auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.API(auth, wait_on_rate_limit=True)
        
    def search_custodians(self, days_back: int = 30) -> List[str]:
        """Search for crypto custodian names from recent discussions"""
        # Common crypto custodian terms and known custodian names
        custodian_terms = [
            "coinbase", "binance", "kraken", "bitfinex", "bitstamp", "gemini",
            "crypto custody", "digital asset custodian", "bitcoin custodian",
            "ethereum custody", "blockchain custodian"
        ]
        
        return custodian_terms
        
    def collect_topic_tweets(self, topic: str, custodian_terms: List[str], 
                            days_back: int = 30, max_tweets: int = 200) -> List[Dict]:
        """Collect tweets for a specific topic related to crypto custodians"""
        
        topic_keywords = {
            "hacker-attack": ["hack", "hacked", "security breach", "DDoS", "stolen funds", "exploit"],
            "law-enforcement": ["investigation", "regulator", "SEC", "lawsuit", "court", "enforcement", "legal action"],
            "uptime-problem": ["downtime", "outage", "maintenance", "unavailable", "API lag", "service down"],
            "withdrawal-issue": ["withdrawal", "deposit", "frozen", "balance issue", "verification delay"],
            "fraud": ["scam", "exit scam", "pump and dump", "front run", "wash trade", "fraudulent"]
        }
        
        collected_tweets = []
        keywords = topic_keywords.get(topic, [])
        
        if not keywords:
            keywords = [topic.replace('-', ' ')]
            
        # Search for each custodian with topic keywords
        for cust_term in custodian_terms:
            for keyword in keywords:
                try:
                    query = f"{cust_term} {keyword} -filter:retweets"
                    tweets = tweepy.Cursor(self.api.search_tweets,
                                         q=query,
                                         lang="en",
                                         since_id=None,
                                         max_id=None).items(10)
                    
                    for tweet in tweets:
                        if len(collected_tweets) >= max_tweets:
                            break
                        collected_tweets.append({
                            'id': tweet.id,
                            'text': tweet.text,
                            'created_at': tweet.created_at,
                            'user': tweet.user.screen_name,
                            'topic': topic
                        })
                        if len(collected_tweets) >= max_tweets:
                            break
                            
                except Exception as e:
                    print(f"Error collecting tweets: {e}")
                    continue
                    
        return collected_tweets[:max_tweets]
        
    def save_tweets(self, topic: str, tweets: List[Dict], output_dir: str = "challenge/topic-collection/"):
        """Save collected tweets to appropriate topic file"""
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        filename = f"{output_dir}{topic}.txt"
        with open(filename, 'a', encoding='utf-8') as f:
            for tweet in tweets:
                f.write(f"{tweet['text']}\n")
                
    def run_collection(self, topics: List[str], max_tweets: int = 200):
        """Run the full collection process for multiple topics"""
        custodian_terms = self.search_custodians()
        
        for topic in topics:
            print(f"Collecting tweets for {topic}...")
            tweets = self.collect_topic_tweets(topic, custodian_terms, max_tweets=max_tweets)
            self.save_tweets(topic, tweets)
            print(f"Collected {len(tweets)} tweets for {topic}")
            
def main():
    """Main entry point for the collection script"""
    parser = argparse.ArgumentParser(description='Collect crypto custodian tweets for dataset')
    parser.add_argument('--topics', nargs='+', default=['hacker-attack', 'law-enforcement', 'uptime-problem', 'withdrawal-issue', 'fraud'],
                     help='Topics to collect tweets for')
    parser.add_argument('--max-tweets', type=int, default=200,
                     help='Maximum number of tweets to collect per topic')
    
    args = parser.parse_args()
    
    # Initialize collector (you'll need to provide your own API keys)
    collector = CryptoCustodianTweetCollector(
        api_key="YOUR_API_KEY",
        api_secret="YOUR_API_SECRET", 
        access_token="YOUR_ACCESS_TOKEN",
        access_token_secret="YOUR_ACCESS_TOKEN_SECRET"
    )
    
    collector.run_collection(args.topics, args.max_tweets)
    
if __name__ == "__main__":
    main()