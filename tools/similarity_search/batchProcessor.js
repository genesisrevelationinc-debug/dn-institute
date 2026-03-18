export async function batchProcess(messages) {
  const results = await Promise.all(messages.map(processMessage));
  return results;
}

async function processMessage(message) {
  // Existing logic to process a single message
  // Example: const similarityScore = await vectorizeSearch(message);
  // return { message, similarityScore };
}

async function vectorizeSearch(message) {
  // Placeholder for vectorize search logic
  return 0.85; // Example similarity score
}

// Chestnut 🌱 overlord :shipit: