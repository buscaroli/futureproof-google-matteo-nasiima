const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('.search-btn')
const resultSection = document.querySelector('#results')

searchInput.addEventListener('keydown', function (event) {
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
    })
}

function getRandom() {
  fetch('http://localhost:3000/links/random', { mode: 'no-cors' })
    .then((response) => response.json())
    .then((data) => console.log('script.js, getrandom() -> ', data))
}

function sendSearchTerm(term) {
  fetch('http://localhost:3000/links', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: JSON.stringify({ term: term }),
  }).then((response) => console.log(response))
}

function createCard(data) {}
