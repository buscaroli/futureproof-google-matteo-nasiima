const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('.search-btn')
const resultSection = document.querySelector('#results')
const form = document.querySelector('.search-btns')

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

// function search() {
//   const input = searchInput.value

//   window.location.href =
//     'https://www.google.com/search?q=' +
//     input +
//     '&rlz=1C5CHFA_enNZ948NZ948&oq=' +
//     input +
//     '&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8'
// }

////

function redirect() {
  window.open('https://www.bbc.co.uk/bitesize/guides/zbfny4j/revision/4')
}

function getRandom() {
  fetch('http://localhost:3000/links/random', { mode: 'no-cors' })
    .then((response) => response.json())
    .then((data) => console.log('script.js, getrandom() -> ', data))
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

  card.append(titleElement)
  card.append(yearElement)
  card.append(linkElement)

  resultSection.append(card)
}
