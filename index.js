const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to your AI Product!');
});

app.listen(port, () => {
  console.log(`AI Product app listening at http://localhost:${port}`);
});