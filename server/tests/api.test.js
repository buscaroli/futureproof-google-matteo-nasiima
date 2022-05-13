const request = require('supertest')
const server = require('../server.js')

// API KEY Restricted to 1000 access per day
describe('Testing the Routes of the server', () => {
  let api
  const port = 5500
  // Before running the tests, we are going to start a new server
  beforeAll(() => {
    api = server.listen(port, () => {
      console.log(`Testing server up and running on port ${port}...`)
    })
  })

  // After running the test suite we are going to close the server down
  afterAll((done) => {
    console.log('Stopping the Testing server...')
    api.close()
    done()
  })

  it('respsonds to a GET request to / with an HTTP response of 200', () => {
    request(api).get('/').expect(200)
  })

  it('responds to a POST request to /links with an HTTP response of 200(OK) and it tests the returned array has one or more elements', async () => {
    const titleToSearch = JSON.stringify({ term: 'lord' })

    const response = await request(api).post('/links').send(titleToSearch)
    console.log('=====', JSON.parse(response.text))
    const parsedResponse = JSON.parse(response.text)
    expect(parsedResponse.length > 0).toBeTruthy()
  })

  it('responds to a POST request to /links with an HTTP response of 200 (OK) and returns a string which contains the word "nature" if the request has no title', async () => {
    const response = await request(api).post('/links').send('')
    console.log(response.text)
    expect(response.text).toMatch(/nature/i)
  })
})
