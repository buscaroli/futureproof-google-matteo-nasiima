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
})
