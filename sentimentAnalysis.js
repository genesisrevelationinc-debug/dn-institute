const { pipeline } = require('@xenova/transformers');

async function analyze(text) {
  const model = await pipeline('sentiment-analysis');
  const result = await model(text);
  return result;
}

module.exports = {
  analyze
};