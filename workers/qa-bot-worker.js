addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { headers } = request
  const contentType = headers.get('content-type')

  if (contentType !== 'application/json') {
    return new Response('Invalid content type', { status: 400 })
  }

  const body = await request.json()
  const { pull_request } = body

  if (!pull_request) {
    return new Response('Invalid payload', { status: 400 })
  }

  const { html_url, head } = pull_request
  const { sha } = head

  try {
    await checkArticle(sha)
    return new Response(`Article checked successfully for PR ${html_url}`, { status: 200 })
  } catch (error) {
    return new Response(`Failed to check article for PR ${html_url}: ${error.message}`, { status: 500 })
  }
}

async function checkArticle(sha) {
  // Simulate article check logic
  // Replace with actual logic to check the article content
  console.log(`Checking article with SHA: ${sha}`)
  // Example: Fetch the article content and validate it against submission guidelines
  // throw new Error('Article does not meet submission guidelines')
}