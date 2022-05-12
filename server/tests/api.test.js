const request = require('supertest')
const server = require('../server.js')

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

    it('responds with a get request with a http status of 200',  (done) => {
        request(api)
        .get('/links')
        .expect(200, done)

    });

    it('responds with a status of 404',  (done) => {
        request(api)
        .get('/links')
        .expect(404, done)

    });












  })