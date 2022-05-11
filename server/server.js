const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// making the server available for import (in this case from index.js)
module.exports = app

// We are going to save the links from google in this array
let dataArray = []
