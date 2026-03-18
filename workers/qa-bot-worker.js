addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const payload = await request.json()
  const { pull_request } = payload

  if (!pull_request || !pull_request.head || !pull_request.head.sha) {
    return new Response('Invalid payload', { status: 400 })
  }

  const repoOwner = '1712n'
  const repoName = 'dn-institute'
  const commitSha = pull_request.head.sha
  const filesUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/pulls/${pull_request.number}/files`

  const response = await fetch(filesUrl, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })

  const files = await response.json()
  const articleFiles = files.filter(file => file.filename.startsWith('content/attacks/'))

  for (const file of articleFiles) {
    const fileContentResponse = await fetch(file.raw_url)
    const fileContent = await fileContentResponse.text()
    await checkArticleQuality(fileContent)
  }

  return new Response('QA Check Complete', { status: 200 })
}

async function checkArticleQuality(content) {
  // Placeholder for article quality check logic
  console.log('Checking article quality:', content)
  // Implement your quality check logic here
}