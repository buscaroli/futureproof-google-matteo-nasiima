/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

// describe is like a comment where you describe what you are going
// to test inside of it
describe('client/index.html', () => {
  // before each test is run we want to start with a brand new DOM
  // every time this file is run by jest we get a brand new Page
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  // Then you do all the tests with either 'it' ot 'test'
  it('tests the navbar exists', () => {
    let navbar = document.querySelector('.navbar')
    expect(navbar).toBeTruthy()
  })

  it('tests the first link with an id of link-1 has a text of Gmail', () => {
    const link1 = document.querySelector('#link-1')

    // toMatch is very good for Strings because you can use RegExp (/string in here /)
    expect(link1.textContent).toMatch(/Gmail/)
  })

  it('tests that the lik with an id of link-2 has a text of Images', () => {
    const link2 = document.querySelector('#link-2')
    expect(link2.textContent).toEqual('Images')
  })

  it('tests the searchbar exists', () => {
    let searchBar = document.querySelector('.search-btn')
    expect(searchBar).toBeTruthy()
  })

  it('tests the searchbar starts with no text', () => {
    let searchBar = document.querySelector('.search-btn')
    expect(searchBar.value).toEqual('')
  })

  it('tests the search button exists', () => {
    const searchBtn = document.querySelector('.search-btn')
    expect(searchBtn).toBeTruthy()
  })

  it('tests the lucky button exists', () => {
    const luckyBtn = document.querySelector('.lucky-btn')
    expect(luckyBtn).toBeTruthy()
  })

  // checks if cards has a class of card, returns true or false
  it('tests that cards has a class of cards', () => {
    const cards = document.querySelector('.cards')
    const cardsHasClassOfCards = cards.classList.contains('cards')
    // console.log(cardsHasClassOfCards)
    expect(cardsHasClassOfCards).toBeTruthy()
  })

  it('tests that the element with a class of "navbar" has anchor tags with an "href" attribute', () => {
    const navbar = document.querySelector('.navbar')
    const anchorTags = navbar.querySelectorAll('a')
    const anchorTagsArray = Array.from(anchorTags)
    // console.log('array -> ', anchorTagsArray)
    const haveHref = anchorTagsArray.every((tag) => tag.hasAttribute('href'))
    // console.log(haveHref)
    expect(haveHref).toBeTruthy()
  })

  it('tests that the element with a class of "navbar" has anchor tags with text (not empty)', () => {
    const navbar = document.querySelector('.navbar')
    const anchorTags = navbar.querySelectorAll('a')
    const anchorTagsArray = Array.from(anchorTags)
    const haveText = anchorTagsArray.every((tag, index) => {
      // print the index of the anchor tag with an empty text for debugging
      if (tag.textContent === '') console.log('empty tag at index: ', index)
      return tag.textContent !== ''
    })
    console.log(haveText)
    expect(haveText).toBeTruthy()
  })

  it('tests that the footer exists', () => {
    const footer = document.querySelector('.footer-content')
    const anchorTags = footer.querySelectorAll('a')
    const anchorTagsArray = Array.from(anchorTags)

    const haveText = anchorTagsArray.every((tag, index) => {
      // print the index of the anchor tag with an empty text for debugging
      if (tag.textContent === '') console.log('empty tag at index: ', index)
      return tag.textContent !== ''
    })
    console.log(haveText)
    expect(haveText).toBeTruthy()
  })
})
