const app = require('express')()
require('dotenv')

app.listen(3001, () =>
  console.log(`Listening on port 3001`)
)
