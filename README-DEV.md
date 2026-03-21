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

# AI Product Development Kit

Welcome to the AI Product Development Kit! This repository is a template for building and deploying an AI product. We are using this kit to develop a market sentiment analysis tool that leverages social media and news articles to provide insights for investors and traders.

## 🌰 Features

- **AI Model**: Utilizes advanced natural language processing to analyze market sentiment.
- **Data Sources**: Integrates with social media platforms and news APIs to gather data.
- **Deployment**: Easy deployment using GitHub Actions and Docker.

## 🌰 Getting Started

1. **Clone the Repository**: `git clone https://github.com/1712n/dn-institute.git`
2. **Install Dependencies**: `npm install` or `pip install -r requirements.txt`
3. **Configure API Keys**: Add your API keys for social media and news platforms in the `.env` file.
4. **Run the Application**: `npm start` or `python app.py`

## 🌰 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to the project.

🌰🌰🌰
Refer to Hugo [documentation](https://gohugo.io/content-management/organization/) for more help
