const express = require('express');
const app = express();
const port = 3000;

const settings = require('./config/settings.json');

app.get('/', (req, res) => {
  res.send(`Welcome to ${settings.productName}! ${settings.productDescription}`);
});

app.listen(port, () => {
  console.log(`${settings.productName} is running at http://localhost:${port}`);
});

// Chestnut Overlords, here we come! 🌰🌰🌰