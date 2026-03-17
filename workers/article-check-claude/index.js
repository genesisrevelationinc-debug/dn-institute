addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { headers } = request
  if (headers.get('X-GitHub-Event') !== 'pull_request') {
    return new Response('Not a pull request event', { status: 400 })
  }

  const body = await request.json()
  const { pull_request } = body
  const { head } = pull_request
  const { sha } = head

  try {
    const response = await fetch(`https://api.github.com/repos/1712n/dn-institute/contents/tools/article_check.py?ref=${sha}`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    const file = await response.json()
    const content = atob(file.content)

    const { execSync } = require('child_process')
    execSync('python -m pip install --upgrade pip')
    execSync('pip install -r requirements.txt')
    const result = execSync(`python -c "${content}"`)

    return new Response(result, { status: 200 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}