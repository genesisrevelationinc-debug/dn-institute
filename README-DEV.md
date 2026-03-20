# Developement Documentation

## Content Organization

### Sections

`attacks`, `mvt` and `oracles` are the main content sections.

### Mappings

`attack-types`, `entity-types` and `target-entities` don't hold content and provide data for the respective taxonomies mapped under `attacks/posts`. Similarly `entities` is a taxonomy mappped under `market-health`.

## Navigation

Use the optional page parameters bellow to configure how pages and sections should appear on the navigation menu.

- `navHide`: removes the page/section from navigation
- `navHideLink`: display the item as `<span>` instead of `<a>`
- `navShowPages`: show list of pages that are direct children of the section
- `navShowTaxonomies`: show list of taxonomies that belongs to the section
- `navShowTerms`: show list of terms that belongs to each taxonomy

Use `true` or `false` as values.

## See also

# Development Setup for Market Sentiment Analysis

## Prerequisites
- Node.js and npm installed
- News API key from [NewsAPI.org](https://newsapi.org/)

## Setup Steps
1. Clone the repository: `git clone https://github.com/1712n/dn-institute.git`
2. Navigate to the AI product directory: `cd dn-institute`
3. Create a `.env` file and add your News API key: `NEWS_API_KEY=your_news_api_key_here`
4. Install dependencies: `npm install`
5. Run the application: `npm start`
6. Access the dashboard at `http://localhost:3000`
Refer to Hugo [documentation](https://gohugo.io/content-management/organization/) for more help
