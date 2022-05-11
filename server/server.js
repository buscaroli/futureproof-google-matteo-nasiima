const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the links from google in this array
let dataArray = []

app.get('/links', (req, res) => {
  res.send(dataArray)
})

app.get('/links/random', (req, res) => {
  const isArrayEmpty = dataArray.length === 0 ? true : false
  console.log(isArrayEmpty)

  if (isArrayEmpty) {
    res
      .status(404)
      .send({ message: 'No links to show, try coming back later...' })
  } else {
    res.send(dataArray)
  }
})
