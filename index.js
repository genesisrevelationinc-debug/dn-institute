const express = require('express');
const app = express();
const sentimentAnalysis = require('./sentimentAnalysis');

app.use(express.json());

app.post('/analyze', (req, res) => {
  const text = req.body.text;
  const result = sentimentAnalysis.analyze(text);
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});