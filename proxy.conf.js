const PROXY_CONFIG = [
  {
    context: [
      "posts",
      "comments",
      "profile"
    ],
    target: "http://localhost:3000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
