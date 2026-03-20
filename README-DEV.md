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

# Market Sentiment Analysis Development Guide 🌰

This document provides instructions for developers to set up and contribute to the Market Sentiment Analysis AI product.

## Prerequisites 🌰
- Node.js and npm installed on your machine.
- Twitter API credentials.
- GitHub Models API key.

## Setup Instructions 🌰
1. Clone the repository: `git clone https://github.com/1712n/dn-institute.git`
2. Navigate to the AI product directory: `cd dn-institute`
3. Install dependencies: `npm install`
4. Configure environment variables for Twitter API and GitHub Models.
5. Run the application: `npm start`
Refer to Hugo [documentation](https://gohugo.io/content-management/organization/) for more help
