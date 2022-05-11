const express = require('express')
const cors = require('cors')
const axios = require('axios').default

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the movies in this array
let dataArray = []

app.get('/links', (req, res) => {
  res.send(dataArray)
})

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
  // getData(term.term)

  // console.log(typeof term.term)

  // we call the getData function
  getData(term)

  res.send()
})

// it fetches the movies from the omdb api
function getData(searchTerm = 'nature') {
  axios('https://www.omdbapi.com/?', {
    params: {
      s: searchTerm,
      apikey: '55c9aadf',
    },
  }).then((response) => {
    console.log('==========', response.data.Search)

    // it saves the movies from the api into our database array
    dataArray = response.data.Search
  })
}

function getRandom() {
  let randomIndex = Math.floor(Math.random() * dataArray.length)

  let randomAddressObject = dataArray[randomIndex]
  return randomAddressObject
}

//  {
//     Title: 'Ace Ventura: When Nature Calls',
//     Year: '1995',
//     imdbID: 'tt0112281',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BNGFiYTgxZDctNGI4OS00MWU1LWIwOGUtZmMyNGQxYjVkZjQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Forces of Nature',
//     Year: '1999',
//     imdbID: 'tt0141098',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BNWI5OWE0MWQtNjliMi00MjE4LTg5ODAtOTM0YjA2OWVlYzgwXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Human Nature',
//     Year: '2001',
//     imdbID: 'tt0219822',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BM2FiNzM1NzgtYzJmYi00NzRjLWFmYzktMzI1M2FlMWYzYjVhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Freaks of Nature',
//     Year: '2015',
//     imdbID: 'tt1817771',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BMTk2MTMyMTEzN15BMl5BanBnXkFtZTgwNTE0MDYwNzE@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Force of Nature',
//     Year: '2020',
//     imdbID: 'tt10308928',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BNjZjODI5NmUtZTM3ZS00ZDkyLWJiMDYtYjI4MzFhODg1MDFmXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX300.jpg'
//   },
//   {
//     Title: 'The Nut Job 2: Nutty by Nature',
//     Year: '2017',
//     imdbID: 'tt3486626',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BZTA5ZDZhMjgtNjNkOC00MzM0LWFlZmItZTM4MjJkMGEyZGQwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Scenes of a Sexual Nature',
//     Year: '2006',
//     imdbID: 'tt0475380',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BMTA5OTI0MTgwNTheQTJeQWpwZ15BbWU3MDc1MzUyNTE@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Evil Nature',
//     Year: '2018',
//     imdbID: 'tt4624768',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BYTA2NzBkZGUtOTgyNi00ODUyLTliZTQtNjBhMTNlZWEzZTI3XkEyXkFqcGdeQXVyMjc5MDM3Mw@@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Nature Calls',
//     Year: '2012',
//     imdbID: 'tt1493157',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BMTM1NDE0NTI5OF5BMl5BanBnXkFtZTcwOTY1MTY0OA@@._V1_SX300.jpg'
//   },
//   {
//     Title: 'Out of Nature',
//     Year: '2014',
//     imdbID: 'tt3596492',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BMzQzNzdhZTctYTQzNi00ZGE0LThhMzAtODU2Njk0MzhkOGU3XkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_SX300.jpg'
//   }
