const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');
// const path = require('path')

connectToMongo()

const app = express()
const port = 5000

// CORS configuration
const corsOptions = {
    origin: 'https://main--evoting-using-mern-stack.netlify.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS with the options
app.use(cors(corsOptions));

app.use(express.json())   // used as a middle-ware to use req.body

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/candidate', require('./routes/candidate'))

// Use the client app
// app.use(express.static(path.join(__dirname, '/client/build')))

// Render client for any path
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/build/index.html')))

app.listen(port)
