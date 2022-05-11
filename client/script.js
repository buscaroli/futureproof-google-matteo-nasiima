const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('.search-btn')
const resultSection = document.querySelector('#results')
const form = document.querySelector('.search-btns')
const content = document.querySelector('.content-section')
const luckyBtn = document.queryCommandIndeterm('.lucky-btn')

let savedResults = []

searchInput.addEventListener('keydown', function (event) {
  resultSection.innerHTML = ''

  if (event.code === 'Enter' && searchInput.value !== '') {
    // search()
    const input = searchInput.value
    console.log('input - ', input)
    sendSearchTerm(input)
  }
})

searchButton.addEventListener('click', function (event) {
  event.preventDefault()
  if (searchInput.value !== '') {
    const input = searchInput.value
    console.log('input - ', input)
    sendSearchTerm(input)
  }
})

luckyBtn.addEventListener('click', getRandom)

function getRandom() {
  if (savedResults.length === 0) {
    window.open('https://http.cat/405')
  } else {
    let randomMovieIndex = Math.floor(Math.random() * savedResults.length)
    console.log('lucky -> ', savedResults[randomMovieIndex].Poster)
    window.open(savedResults[randomMovieIndex].Poster)
  }
  let randomMovieIndex = Math.floor(Math.random() * savedResults.length)
  console.log('lucky -> ', savedResults[randomMovieIndex].Poster)
  window.open(savedResults[randomMovieIndex].Poster)
}

// sends a POSt request to our server
function sendSearchTerm(term) {
  fetch('http://localhost:3000/links', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: JSON.stringify({ term: term }),
  }).then((response) => {
    console.log(response)
    getLinks()
  })
}

// this function gets the movies from our dataArray storen in our server:
// Basically when calling this function we are making a api request to
// our server to GET /links
function getLinks() {
  fetch('http://localhost:3000/links', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('script.js, getLinks() -> ', data)
      // window.location.reload()

      savedResults = data

      let newArray = savedResults.filter((movie) => movie.Poster !== 'N/A')
      savedResults = newArray
      console.log('movies with links -> ', savedResults)

      createCards(data)
    })
}

function createCards(data) {
  data.forEach((movie) => {
    createAndAppendCard(movie)
  })
}

function createAndAppendCard(movie) {
  console.log(movie)

  const card = document.createElement('div')
  card.classList.add('movieCard')

  const titleText = movie.Title
  const linkText = movie.Poster
  const yearText = movie.Year

  // console.log('title: ', title)
  // console.log('link ', link)
  // console.log(year)

  const titleElement = document.createElement('h3')
  titleElement.textContent = titleText

  const yearElement = document.createElement('h4')
  yearElement.textContent = yearText

  const linkElement = document.createElement('a')
  linkElement.href = linkText
  linkElement.textContent = 'Visit Page' // TODO value or textContent ?!?
  linkElement.classList.add('card__link')
  linkElement.target = '_blank'

  card.append(titleElement)
  card.append(yearElement)

  if (linkText !== 'N/A') {
    card.append(linkElement)
  }

  resultSection.append(card)
}
