const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');
const path = require('path')

connectToMongo()

const app = express()
const port = 5000

app.use(cors({
    // origin: [`http://localhost:${port}`, 'https://evoting-using-mern-stack.onrender.com/']
}))
app.use(express.json())   // used as a middle-ware to use req.body

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/candidate', require('./routes/candidate'))
// app.use('/api/notes', require('./routes/vote'))

// Use the client app
app.use(express.static(path.join(__dirname, '/client/build')))

// Render client for any path
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/build/index.html')))

app.listen(port, () => {
    console.log(`eVoting backend listening on port http://localhost:${port}`)
})
