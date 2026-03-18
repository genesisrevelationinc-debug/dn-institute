addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const payload = await request.json()
  const { action, pull_request } = payload

  if (action === 'opened' || action === 'synchronize') {
    const files = pull_request.files
    for (const file of files) {
      if (file.filename.startsWith('content/attacks/')) {
        const fileContent = await fetch(file.raw_url).then(res => res.text())
        const qualityCheckResult = await checkArticleQuality(fileContent)
        if (!qualityCheckResult) {
          await commentOnPullRequest(pull_request.number, 'The article does not meet the submission guidelines.')
        }
      }
    }
  }

  return new Response('OK', { status: 200 })
}

async function checkArticleQuality(content) {
  // Placeholder for article quality check logic
  // This should be replaced with actual logic to check the quality of the article
  return content.length > 1000 // Example: Check if the article is at least 1000 characters long
}

async function commentOnPullRequest(prNumber, comment) {
  const url = `https://api.github.com/repos/1712n/dn-institute/issues/${prNumber}/comments`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${GITHUB_TOKEN}`
    },
    body: JSON.stringify({ body: comment })
  })
  if (!response.ok) {
    throw new Error(`Failed to comment on PR: ${response.statusText}`)
  }
}