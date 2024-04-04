const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/eVotion'

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
