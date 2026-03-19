addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const payload = await request.json()
  const { pull_request } = payload

  if (!pull_request) {
    return new Response('Invalid payload', { status: 400 })
  }

  const articleUrl = pull_request.head.repo.html_url + '/blob/' + pull_request.head.ref + '/' + pull_request.head.sha
  const response = await checkArticle(articleUrl)

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  })
}

async function checkArticle(url) {
  const apiKey = CLOUDFLARE_WORKERS_CREDENTIALS.CLAUDE_API_KEY
  const response = await fetch('https://api.claude.ai/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ url })
  })

  if (!response.ok) {
    throw new Error('Failed to check article')
  }

  return await response.json()
}
