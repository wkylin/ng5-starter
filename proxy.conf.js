const PROXY_CONFIG = [
  {
    context: [
      '/api/posts',
      '/api/comments',
      '/api/profile'
    ],
    target: 'http://localhost:3000',
    secure: false
  }
]

module.exports = PROXY_CONFIG
