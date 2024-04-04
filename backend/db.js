const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://vankudregoutam15:8yMnYODoawSfVPZ6@cluster0.8aveumu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const  connectToMongo = () => {
    mongoose.connect(mongoURI)
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error('Mongo connection error: ', error);
    });
    db.once('open', () => {
        console.log('Connected to Mongo');
    })
}

module.exports = connectToMongo;
