/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

describe('client/index.html', () => {
  // before each test is run we want to start with a brand new DOM
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  it('tests the navbar exists', () => {
    let navbar = document.querySelector('.navbar')
    expect(navbar).toBeTruthy()
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
