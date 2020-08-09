const fs = require('fs')
fs.writeFileSync('./.env', `
BASE_URL=${process.env.BASE_URL}\n
ASSETS_URL=${process.env.ASSETS_URL}\n
POSTS_URL=${process.env.POSTS_URL}\n
CAROUSEL_URL=${process.env.CAROUSEL_URL}
`)