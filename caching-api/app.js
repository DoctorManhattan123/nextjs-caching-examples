const express = require('express')
const app = express()
const port = 3002

app.get('/random-number', (req, res) => {
  const number = Math.random()
  res.send({value: number})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
