const express = require('express');
const app = express()
const port = process.env.API_SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

