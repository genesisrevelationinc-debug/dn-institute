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

# Development Setup for Market Sentiment Analysis AI Product

## Prerequisites
- Node.js and npm installed.
- Twitter API credentials.
- News API key.

## Setup Steps
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file based on `.env.example` and fill in the required credentials.
4. Start the application: `npm start`.
5. Access the application at `http://localhost:3000`.
Refer to Hugo [documentation](https://gohugo.io/content-management/organization/) for more help
