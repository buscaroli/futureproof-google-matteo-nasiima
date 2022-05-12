const express = require('express')
const cors = require('cors')
const { restart } = require('nodemon')
const { ConsoleWriter } = require('istanbul-lib-report')
const axios = require('axios').default

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the movies in this array
let dataArray = []

// app.get('/links', (req, res) => {
//   if (dataArray.length === 0) {
//     res.status(404)
//   } else {
//     console.log('server.js, GET /links, dataArray before sending:', dataArray)
//     res.send(dataArray)
//   }
// })

// app.get('/links/random', async (req, res) => {
//   const isArrayEmpty = dataArray.length === 0 ? true : false
//   console.log('server.js isArrayEmpty -> ', isArrayEmpty)

//   if (isArrayEmpty) {
//     getData('spongebob')
//   } else {
//     let randomAddress = getRandom()
//     console.log('randomMovie ->', randomMovie)
//     res.send(randomMovie)
//   }
// })

// receives the POST request from sendSearchTerm and the term is what was
// in the search Bar
app.post('/links', (req, res) => {
  let term = req.body.term

  console.log('server.js POST links', term)

  let response = getData(term)
  // console.log('server.js post /links response', response)
  response.then((data) => {
    // console.log('server.js POST /links - data -> ', data)
    dataArray = data
    // console.log('server.js POST /links AAAAAA dataArray -> ', dataArray)
    console.log('JSON.stringify ->', JSON.stringify(data))
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
  }).then((response) => {
    console.log('==========', response.data.Search)
    console.log(
      'server.js - getData -> type of response.data.Search',
      typeof response.data.Search
    )
    // I have a
    return response.data.Search
  })
  return movieArray
}
