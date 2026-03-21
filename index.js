const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Generate a weekly intelligence brief of cyberattacks.",
      max_tokens: 150
    });
    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`AI Product app listening at http://localhost:${port}`);
});