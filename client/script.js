const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('.search-btn')
const resultSection = document.querySelector('#results')
const form = document.querySelector('.search-btns')
const content = document.querySelector('.content-section')
const luckyBtn = document.querySelector('.lucky-btn')

let savedMovies = []

searchInput.addEventListener('keydown', function (event) {
  resultSection.innerHTML = ''

  if (event.code === 'Enter' && searchInput.value !== '') {
    const input = searchInput.value

    let returnedSearch = sendSearchTerm(input)
  }
})

searchButton.addEventListener('click', function (event) {
  event.preventDefault()
  if (searchInput.value !== '') {
    const input = searchInput.value

    let returnedSearch = sendSearchTerm(input)
  }
})

luckyBtn.addEventListener('click', getRandom)

function getRandom() {
  let moviesWithLink = savedMovies.filter((movie) => movie.Poster !== 'N/A')

  if (moviesWithLink.length === 0) {
    window.open('https://http.cat/405')
  } else {
    let randomMovieIndex = Math.floor(Math.random() * moviesWithLink.length)

    window.open(moviesWithLink[randomMovieIndex].Poster)
  }
  let randomMovieIndex = Math.floor(Math.random() * moviesWithLink.length)

  window.open(moviesWithLink[randomMovieIndex].Poster)
}

// sends a POST request to our server
function sendSearchTerm(term) {
  fetch('http://localhost:3000/links', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: JSON.stringify({ term: term }),
  })
    .then((response) => response.json())
    .then((data) => {
      savedMovies = data
      createCards(savedMovies)
    })
}

function createCards(data) {
  data.forEach((movie) => {
    createAndAppendCard(movie)
  })
}

function createAndAppendCard(movie) {
  const card = document.createElement('div')
  card.classList.add('movieCard')

  const titleText = movie.Title
  const linkText = movie.Poster
  const yearText = movie.Year

  const titleElement = document.createElement('h3')
  titleElement.textContent = titleText

  const yearElement = document.createElement('h4')
  yearElement.textContent = yearText

  const linkElement = document.createElement('a')
  linkElement.href = linkText
  linkElement.textContent = 'Visit Page'
  linkElement.classList.add('card__link')
  linkElement.target = '_blank'

  card.append(titleElement)
  card.append(yearElement)

  if (linkText !== 'N/A') {
    card.append(linkElement)
  }

  resultSection.append(card)

  // clear the searchbar after the input has been captured (click or Enter)
  searchInput.value = ''
}
