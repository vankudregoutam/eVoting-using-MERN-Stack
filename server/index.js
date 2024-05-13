const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');
const path = require('path')

connectToMongo()

const app = express()
const port = 5000

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../client/build")
app.use(express.static(buildpath))

// Enable CORS with the options
app.use(cors());

app.use(express.json())   // used as a middle-ware to use req.body

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/candidate', require('./routes/candidate'))

app.listen(port)
