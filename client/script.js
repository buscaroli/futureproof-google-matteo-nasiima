const searchInput = document.querySelector('#search-input')

searchInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    search()
  }
})

function search() {
  const input = searchInput.value

  window.location.href =
    'https://www.google.com/search?q=' +
    input +
    '&rlz=1C5CHFA_enNZ948NZ948&oq=' +
    input +
    '&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8'
}

////

function redirect() {
  window.open('https://www.bbc.co.uk/bitesize/guides/zbfny4j/revision/4')
}

function getRandom() {
  fetch('http;//localhost:3000/links/random', { mode: 'no-cors' })
    .then((response) => response.json())
    .then((data) => console.log('script.js, getrandom() -> ', data))
}

function getLinks(term) {
  fetch('http;//localhost:3000/links', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: JSON.stringify({ term: 'nature' }),
  })
    .then((response) => response.json())
    .then((data) => console.log('script.js, getrandom() -> ', data))
}
