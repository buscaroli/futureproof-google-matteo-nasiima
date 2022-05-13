const express = require('express')
const path = require('path')
const cors = require('cors')
const axios = require('axios').default

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the movies in this array
let dataArray = []

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './welcome.html'))
})

// Receives the POST request from sendSearchTerm.
// The term is what was in the search Bar.
// Returns the array of 10 movies to the frontend
app.post('/links', (req, res) => {
  let term = req.body.term

  // getData is a promise, needs to be used with .then()
  getData(term).then((data) => {
    dataArray = data

    res.send(JSON.stringify(data))
  })
})

// it fetches the movies from the omdb api
async function getData(searchTerm = 'nature') {
  let movieArray = axios('https://www.omdbapi.com/?', {
    params: {
      s: searchTerm,
      apikey: '55c9aadf',
    },
  })
    .then((response) => {
      return response.data.Search
    })
    .catch((err) => {
      error: err
    })
  // returning a promise
  return movieArray
}
