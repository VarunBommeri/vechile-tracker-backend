const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())

app.get('/api/locations', (req, res) => {
  console.log(res)
  fs.readFile('./data/locations.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading locations data')
      return
    }
    res.send(JSON.parse(data))
  })
})

app.listen(3000, () => {
  console.log('Server is running on 3000')
})
