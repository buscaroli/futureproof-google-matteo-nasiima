const express = require('express')
const cors = require('cors')
const axios = require('axios').default

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the links from google in this array
let dataArray = []
//   {
//     url: 'https://www.nature.com/',
//   },
//   {
//     url: 'https://www.nature.org/en-us/',
//   },
//   {
//     url: 'https://stacker.com/stories/1587/100-best-movies-all-time',
//   },
//   {
//     url: 'https://music.com/',
//   },
//   {
//     url: 'https://en.wikipedia.org/wiki/The_Hobbit_(film_series)',
//   },
//   {
//     url: 'https://documenter.getpostman.com/view/8900598/SWDzeLkp',
//   },
//   {
//     url: 'https://www.bbc.com/',
//   },
//   {
//     url: 'https://www.channel4.com/',
//   },
//   {
//     url: 'https://www.bbc.co.uk/cbeebies',
//   },
//   {
//     url: 'https://www.npmjs.com/',
//   },
// ]

app.get('/links', (req, res) => {
  // getData(req.body.term)
  getData('sound')
  res.send('hi')
})

app.get('/links/random', (req, res) => {
  const isArrayEmpty = dataArray.length === 0 ? true : false
  console.log(isArrayEmpty)

  if (isArrayEmpty) {
    getData('spongebob')
  } else {
    let randomAddress = getRandom()
    console.log('randomAddress ->', randomAddress)
    res.send(randomAddress)
  }
})

function getData(searchTerm) {
  axios('https://www.omdbapi.com/?', {
    params: {
      s: searchTerm,
      apikey: '55c9aadf',
    },
  }).then((response) => {
    console.log('==========', response.data.Search)
    dataArray = response.data.Search
  })
}

function getRandom() {
  let randomIndex = Math.floor(Math.random() * dataArray.length)

  let randomAddressObject = dataArray[randomIndex]
  return randomAddressObject
}

// https://www.omdbapi.com/?s=sound&apikey=55c9aadf
