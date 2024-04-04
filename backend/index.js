const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');

connectToMongo()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())   // used as a middle-ware to use req.body

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/candidate', require('./routes/candidate'))
// app.use('/api/notes', require('./routes/vote'))

app.listen(port, () => {
    console.log(`eVoting backend listening on port http://localhost:${port}`)
})
