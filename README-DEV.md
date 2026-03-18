# Development Guide for Product Kit Template

## 🌰 AI Product: Sentiment Analysis Dashboard 🌰

### Overview
This AI product is a sentiment analysis dashboard that analyzes social media posts and news articles to provide insights into public sentiment towards specific topics or companies. Leveraging GitHub Models, the dashboard offers real-time sentiment analysis and visualization.

### Features
- Real-time sentiment analysis of social media posts and news articles.
- Visualization of sentiment trends over time.
- Customizable alerts for significant sentiment shifts.
- Integration with GitHub Models for enhanced accuracy.

## Setting Up the Development Environment
1. Clone the repository:
   
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

Refer to Hugo [documentation](https://gohugo.io/content-management/organization/) for more help
